import { Component } from '@angular/core';
import { SignupformComponent } from '../../components/signupform/signupform.component';
import { ApplogoComponent } from '../../components/applogo/applogo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupformComponent, ApplogoComponent, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {}
