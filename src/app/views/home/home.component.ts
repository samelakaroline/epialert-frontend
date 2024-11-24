import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { UserService } from "../../services/user.service";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Erro ao carregar os dados do usuário:', err);
      }
    });
  }
}
