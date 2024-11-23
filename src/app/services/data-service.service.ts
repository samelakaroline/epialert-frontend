import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:3000';

  constructor() {}

  // Retorna um usuário específico
  async getUser(id: number): Promise<UserInterface> {
    const data = await fetch(`${this.url}/users/${id}`);
    return data.json();
  }
}
