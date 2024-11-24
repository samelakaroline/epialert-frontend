import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/loginform/loginform.component';
import { AppLogoComponent } from '../../components/applogo/applogo.component'; // Importe o AppLogoComponent


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, AppLogoComponent], // Certifique-se de que LoginFormComponent é standalone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {}
