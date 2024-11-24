import { Component } from '@angular/core';
import { SignupFormComponent } from '../../components/signupform/signupform.component';
import { AppLogoComponent } from '../../components/applogo/applogo.component'; // Importe o AppLogoComponent
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupFormComponent, AppLogoComponent, RouterModule], // Inclua o AppLogoComponent
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {}
