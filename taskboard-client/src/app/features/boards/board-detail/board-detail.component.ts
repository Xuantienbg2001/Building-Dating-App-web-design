import { Component, DestroyRef, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BoardService } from '../../../core/services/board.service';
import { BoardHubService } from '../../../core/services/board-hub.service';
import { TaskService } from '../../../core/services/task.service';
import { BoardColumn, BoardDetail, TaskItem } from '../../../core/models/board.model';

@Component({
  selector: 'app-board-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './board-detail.component.html',
  styleUrl: './board-detail.component.css',
})
export class BoardDetailComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly boardService = inject(BoardService);
  private readonly boardHub = inject(BoardHubService);
  private readonly taskService = inject(TaskService);
  private readonly destroyRef = inject(DestroyRef);

  board = signal<BoardDetail | null>(null);
  loading = signal(true);
  error = signal('');
  newTaskTitles: Record<string, string> = {};

  ngOnInit(): void {
    const boardId = this.route.snapshot.paramMap.get('id');
    if (!boardId) return;

    this.boardHub.board$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((b) => {
      if (b) this.board.set(b);
    });

    this.boardService.getBoard(boardId).subscribe({
      next: async (board) => {
        board.columns = [...board.columns].sort((a, b) => a.order - b.order);
        board.columns.forEach((c) => (c.tasks = c.tasks ?? []));
        this.board.set(board);
        this.boardHub.setBoard(board);
        this.loading.set(false);
        await this.boardHub.startConnection(boardId);
      },
      error: (err) => {
        this.error.set(err);
        this.loading.set(false);
      },
    });
  }

  ngOnDestroy(): void {
    this.boardHub.stopConnection();
  }

  addTask(column: BoardColumn): void {
    const title = this.newTaskTitles[column.id]?.trim();
    if (!title) return;

    this.taskService.createTask(column.id, title).subscribe({
      next: () => (this.newTaskTitles[column.id] = ''),
      error: (err) => this.error.set(err),
    });
  }

  moveTask(task: TaskItem, targetColumnId: string): void {
    if (task.columnId === targetColumnId) return;
    this.taskService.moveTask(task.id, targetColumnId).subscribe({
      error: (err) => this.error.set(err),
    });
  }

  deleteTask(task: TaskItem): void {
    this.taskService.deleteTask(task.id).subscribe({
      error: (err) => this.error.set(err),
    });
  }

  columnOptions(currentColumnId: string): BoardColumn[] {
    return this.board()?.columns.filter((c) => c.id !== currentColumnId) ?? [];
  }
}
