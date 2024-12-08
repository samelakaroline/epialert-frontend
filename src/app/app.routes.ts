import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GeomonitorComponent } from './views/geomonitor/geomonitor.component';
import { NotFoundComponent } from './views/notfound/notfound.component';
import { AlertsComponent } from './views/alerts/alerts.component'; // Novo componente Alerts

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'EpiAlert System - Login',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'EpiAlert System - Cadastro',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'EpiAlert System - Início',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'EpiAlert System - Dashboard',
  },
  {
    path: 'geomonitor',
    component: GeomonitorComponent,
    title: 'EpiAlert System - GeoMonitoramento',
  },
  {
    path: 'alerts', // Nova rota para Alerts
    component: AlertsComponent,
    title: 'EpiAlert System - Alertas',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Página não encontrada',
  },
];
