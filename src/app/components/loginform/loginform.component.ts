import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Importar o Router
import { FormsModule } from '@angular/forms';
import { AppLogoComponent } from '../applogo/applogo.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoginCredentials } from '../../interfaces/loginCredentials-interface';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [FormsModule, RouterModule, AppLogoComponent, CommonModule],
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginFormComponent {
  credentials: LoginCredentials = {
    username_or_email: '',
    password: '',
  };

  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  // Realiza o login do usuário
  onLogin(): void {
    this.isLoading = true;
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response) {
          // Armazena o token e os dados do usuário no localStorage
          this.authService.storeUserData(response.token, response.user);
          console.log('Login bem-sucedido!', response);
          // Redireciona para a tela de início
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Login falhou. Token não recebido.';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error.error?.error || 'Erro ao fazer login. Tente novamente.';
        console.error('Erro ao logar:', error);
      },
    });
  }
}
