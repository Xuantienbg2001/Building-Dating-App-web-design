import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';
import { ShellComponent } from './layout/shell/shell.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent),
    canActivate: [guestGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then((m) => m.RegisterComponent),
    canActivate: [guestGuard],
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'boards', pathMatch: 'full' },
      {
        path: 'boards',
        loadComponent: () =>
          import('./features/boards/board-list/board-list.component').then(
            (m) => m.BoardListComponent
          ),
      },
      {
        path: 'boards/:id',
        loadComponent: () =>
          import('./features/boards/board-detail/board-detail.component').then(
            (m) => m.BoardDetailComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'boards' },
];
