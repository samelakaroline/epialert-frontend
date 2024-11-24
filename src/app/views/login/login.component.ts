import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/loginform/loginform.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {}
