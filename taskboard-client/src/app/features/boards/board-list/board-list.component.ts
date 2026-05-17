import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BoardService } from '../../../core/services/board.service';
import { BoardSummary } from '../../../core/models/board.model';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css',
})
export class BoardListComponent implements OnInit {
  private readonly boardService = inject(BoardService);
  private readonly fb = inject(FormBuilder);

  boards = signal<BoardSummary[]>([]);
  loading = signal(true);
  error = signal('');
  showForm = signal(false);

  createForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
  });

  ngOnInit(): void {
    this.loadBoards();
  }

  loadBoards(): void {
    this.loading.set(true);
    this.boardService.getBoards().subscribe({
      next: (boards) => {
        this.boards.set(boards);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err);
        this.loading.set(false);
      },
    });
  }

  toggleCreate(): void {
    this.showForm.update((v) => !v);
  }

  createBoard(): void {
    if (this.createForm.invalid) return;
    const { name, description } = this.createForm.getRawValue();
    this.boardService.createBoard(name!, description || undefined).subscribe({
      next: () => {
        this.createForm.reset();
        this.showForm.set(false);
        this.loadBoards();
      },
      error: (err) => this.error.set(err),
    });
  }
}
