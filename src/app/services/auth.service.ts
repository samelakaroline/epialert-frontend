import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginCredentials {
  username_or_email: string; // Altera para refletir o campo esperado no backend
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/users'; // URL base do backend

  constructor(private http: HttpClient) {}

  /**
   * Envia credenciais de login ao backend.
   * @param credentials Credenciais no formato esperado pelo backend.
   * @returns Observable com a resposta do backend.
   */
  login(credentials: LoginCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, credentials); // POST para /users/login/
  }

  /**
   * Registra um novo usuário no backend.
   * @param credentials Credenciais para registro (username, email e password).
   * @returns Observable com a resposta do backend.
   */
  register(credentials: RegisterCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, credentials); // POST para /users/register/
  }

  /**
   * Armazena o token JWT no localStorage.
   * @param token Token JWT recebido no login.
   */
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  /**
   * Recupera o token JWT armazenado no localStorage.
   * @returns O token JWT ou null se não existir.
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Remove o token JWT armazenado.
   */
  clearToken(): void {
    localStorage.removeItem('token');
  }

  /**
   * Verifica se o usuário está autenticado com base na presença do token.
   * @returns True se o token existir, false caso contrário.
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
