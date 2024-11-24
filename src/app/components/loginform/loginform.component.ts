import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar o Router
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppLogoComponent } from '../applogo/applogo.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [FormsModule, RouterModule, AppLogoComponent, CommonModule],
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginFormComponent {
  credentials = {
    username_or_email: '',
    password: '',
  };

  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {} // Injete o Router aqui

  /**
   * Realiza o login do usuário.
   */
  onLogin(): void {
    this.isLoading = true;
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.token) {
          this.authService.setToken(response.token); // Salva o token no localStorage
          console.log('Login bem-sucedido!', response);
          this.router.navigate(['/home']); // Redireciona para a tela Home
        } else {
          this.errorMessage = 'Login falhou. Token não recebido.';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.error || 'Erro ao fazer login. Tente novamente.';
        console.error('Erro ao logar:', error);
      },
    });
  }
}
