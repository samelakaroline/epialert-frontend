import { Component } from '@angular/core';
import { SignupFormComponent } from '../../components/signupform/signupform.component';
import { RouterModule } from '@angular/router';
import { AppLogoComponent } from '../../components/applogo/applogo.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupFormComponent, RouterModule, AppLogoComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {}
