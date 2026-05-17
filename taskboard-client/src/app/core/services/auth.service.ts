import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, AuthUser } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = environment.apiUrl + 'auth/';
  private readonly currentUserSource = new BehaviorSubject<AuthUser | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {
    this.loadFromStorage();
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUserSource.value;
  }

  login(userNameOrEmail: string, password: string) {
    return this.http
      .post<AuthResponse>(this.baseUrl + 'login', { userNameOrEmail, password })
      .pipe(tap((response) => this.setSession(response)));
  }

  register(userName: string, email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.baseUrl + 'register', { userName, email, password })
      .pipe(tap((response) => this.setSession(response)));
  }

  logout(): void {
    localStorage.removeItem('tb_user');
    this.currentUserSource.next(null);
  }

  private setSession(response: AuthResponse): void {
    const user: AuthUser = {
      token: response.token,
      userId: response.userId,
      userName: response.userName,
      role: response.role,
    };
    localStorage.setItem('tb_user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  private loadFromStorage(): void {
    const raw = localStorage.getItem('tb_user');
    if (!raw) return;
    try {
      this.currentUserSource.next(JSON.parse(raw) as AuthUser);
    } catch {
      localStorage.removeItem('tb_user');
    }
  }
}
