import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginCredentials } from '../interfaces/loginCredentials-interface';
import { RegisterCredentials } from '../interfaces/registerCredentials-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // URL base do backend
  private apiUrl = 'http://127.0.0.1:8000/users';

  constructor(private http: HttpClient) {}

  // Método para fazer login
  login(credentials: LoginCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, credentials);
  }

  // Método para fazer criar um novo usuário
  register(credentials: RegisterCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, credentials);
  }

  // Método para adicionar o token e os dados do usuário ao localStorage
  storeUserData(token: string, user: any): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Método para retornar o token JWT armazenado
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para retornar os dados do usuário armazenados
  getUser(): any | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Método para remover o token e os dados do usuário do localStorage
  clearUserData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Método para verificar se o usuário está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
