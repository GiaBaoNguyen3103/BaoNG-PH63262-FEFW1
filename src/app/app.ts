import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
}
