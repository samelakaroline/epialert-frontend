import { Component } from '@angular/core';
import { SignupformComponent } from '../../components/signupform/signupform.component';
import { ApplogoComponent } from '../../components/applogo/applogo.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupformComponent, ApplogoComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {}
