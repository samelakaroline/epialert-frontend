import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GeoMonitorComponent } from './views/geomonitor/geomonitor.component';
import { NotFoundComponent } from './views/notfound/notfound.component';

export const routes: Routes = [
  {
    // Rota para a página de login
    path: '',
    component: LoginComponent,
    title: 'EpiAlert System - Login',
  },
  {
    // Rota para a página de cadastro
    path: 'signup',
    component: SignupComponent,
    title: 'EpiAlert System - Cadastro',
  },
  {
    // Rota para a página de início
    path: 'home',
    component: HomeComponent,
    title: 'EpiAlert System - Início',
  },
  {
    // Rota para a página de dashboard
    path: 'dashboard',
    component: DashboardComponent,
    title: 'EpiAlert System - Dashboard',
  },
  {
    // Rota para a página de geo monitoramento
    path: 'geomonitor',
    component: GeoMonitorComponent,
    title: 'EpiAlert System - GeoMonitoramento',
  },
  {
    // Rota para página não encontrada
    path: '**',
    component: NotFoundComponent,
    title: 'Página não encontrada',
  },
];
