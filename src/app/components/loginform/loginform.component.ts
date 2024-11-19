import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplogoComponent } from '../applogo/applogo.component';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [RouterModule, ApplogoComponent],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css',
})
export class LoginformComponent {}
