import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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

  onSignup(): void {
    this.isLoading = true;
    console.log('Cadastrando usuário:', this.credentials);
    setTimeout(() => {
      this.isLoading = false;
      if (this.credentials.username === 'erro') {
        this.errorMessage = 'Erro ao criar a conta. Tente novamente.';
      } else {
        this.errorMessage = '';
        console.log('Cadastro bem-sucedido!');
      }
    }, 2000); // Simulação de requisição
  }
}
