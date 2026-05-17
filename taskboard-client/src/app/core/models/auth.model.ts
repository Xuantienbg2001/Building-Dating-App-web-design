export interface AuthResponse {
  token: string;
  expiresAtUtc: string;
  userId: string;
  userName: string;
  role: string;
}

export interface AuthUser {
  token: string;
  userId: string;
  userName: string;
  role: string;
}
