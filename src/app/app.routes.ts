import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    // Rota para a página de login
    path: '',
    component: LoginComponent,
    title: 'EpyAlert System',
  },
];
