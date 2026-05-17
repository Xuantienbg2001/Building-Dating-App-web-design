import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TaskItem } from '../models/board.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private http: HttpClient) {}

  createTask(columnId: string, title: string) {
    return this.http.post<TaskItem>(
      `${environment.apiUrl}columns/${columnId}/tasks`,
      { title, order: 0 }
    );
  }

  updateTask(taskId: string, changes: Partial<TaskItem>) {
    return this.http.patch<TaskItem>(`${environment.apiUrl}tasks/${taskId}`, {
      title: changes.title,
      description: changes.description,
      order: changes.order,
      priority: changes.priority,
      status: changes.status,
    });
  }

  moveTask(taskId: string, targetColumnId: string, order = 1) {
    return this.http.patch<TaskItem>(
      `${environment.apiUrl}tasks/${taskId}/move?targetColumnId=${targetColumnId}&order=${order}`,
      {}
    );
  }

  deleteTask(taskId: string) {
    return this.http.delete(`${environment.apiUrl}tasks/${taskId}`);
  }
}
