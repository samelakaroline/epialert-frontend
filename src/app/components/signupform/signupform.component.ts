import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signupform',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css'],
})
export class SignupFormComponent {
  credentials = {
    username: '',
    email: '',
    password: '',
  };

  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  // Realiza o cadastro do usuário
  onSignup(): void {
    this.isLoading = true;
    console.log('Cadastrando usuário:', this.credentials);
    // Redireciona para a tela de login
    this.router.navigate(['/']);
    setTimeout(() => {
      this.isLoading = false;
      if (this.credentials.username === 'erro') {
        this.errorMessage = 'Erro ao criar a conta. Tente novamente.';
      } else {
        this.errorMessage = '';
        console.log('Cadastro bem-sucedido!');
      }
    }, 2000);
  }
}
