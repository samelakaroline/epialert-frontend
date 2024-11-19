import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';

export const routes: Routes = [
  {
    // Rota para a página de login
    path: '',
    component: LoginComponent,
    title: 'EpyAlert System',
  },
  {
    // Rota para a página de cadastro
    path: 'signup',
    component: SignupComponent,
    title: 'EpyAlert System - Cadastro',
  },
];
