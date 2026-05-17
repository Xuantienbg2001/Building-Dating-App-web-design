import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { BoardDetail, TaskItem, TaskUpdatedEvent } from '../models/board.model';

@Injectable({ providedIn: 'root' })
export class BoardHubService {
  private hubConnection?: HubConnection;
  private readonly boardSource = new BehaviorSubject<BoardDetail | null>(null);
  board$ = this.boardSource.asObservable();

  constructor(private authService: AuthService) {}

  getBoardValue(): BoardDetail | null {
    return this.boardSource.value;
  }

  setBoard(board: BoardDetail): void {
    this.boardSource.next(board);
  }

  async startConnection(boardId: string): Promise<void> {
    const user = this.authService.getCurrentUser();
    if (!user) return;

    await this.stopConnection();

    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`${environment.hubUrl}board`, {
        accessTokenFactory: () => user.token,
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection.on('TaskUpdated', (event: TaskUpdatedEvent) => {
      this.applyTaskEvent(event);
    });

    await this.hubConnection.start();
    await this.hubConnection.invoke('JoinBoard', boardId);
  }

  async stopConnection(): Promise<void> {
    if (this.hubConnection) {
      await this.hubConnection.stop();
      this.hubConnection = undefined;
    }
  }

  private applyTaskEvent(event: TaskUpdatedEvent): void {
    const board = this.boardSource.value;
    if (!board || board.id !== event.boardId) return;

    if (event.action === 'deleted' && event.taskId && event.columnId) {
      const column = board.columns.find((c) => c.id === event.columnId);
      if (column) {
        column.tasks = column.tasks.filter((t) => t.id !== event.taskId);
      }
      this.boardSource.next({ ...board, columns: [...board.columns] });
      return;
    }

    if (!event.taskId || !event.columnId) return;

    const task: TaskItem = {
      id: event.taskId,
      title: event.title ?? 'Task',
      description: event.description,
      order: event.order,
      dueDateUtc: event.dueDateUtc,
      priority: event.priority,
      status: event.status,
      columnId: event.columnId,
      createdById: '',
    };

    board.columns.forEach((col) => {
      col.tasks = col.tasks.filter((t) => t.id !== task.id);
    });

    const target = board.columns.find((c) => c.id === event.columnId);
    if (target) {
      target.tasks = [...target.tasks, task].sort((a, b) => a.order - b.order);
    }

    this.boardSource.next({ ...board, columns: [...board.columns] });
  }
}
