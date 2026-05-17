import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BoardDetail, BoardSummary } from '../models/board.model';

@Injectable({ providedIn: 'root' })
export class BoardService {
  private readonly baseUrl = environment.apiUrl + 'boards';

  constructor(private http: HttpClient) {}

  getBoards() {
    return this.http.get<BoardSummary[]>(this.baseUrl);
  }

  getBoard(boardId: string) {
    return this.http.get<BoardDetail>(`${this.baseUrl}/${boardId}`);
  }

  createBoard(name: string, description?: string) {
    return this.http.post<BoardDetail>(this.baseUrl, { name, description });
  }
}
