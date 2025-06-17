import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatButton, RouterLink, RouterLinkActive],
  template: `
    <mat-toolbar color="primary">
      <nav class="nav-links">
        <a mat-button routerLink="/" routerLinkActive="active-link">
          Главная
        </a>
        <a mat-button routerLink="/add-book" routerLinkActive="active-link">
          Добавить книгу
        </a>
      </nav>
    </mat-toolbar>

    <main class="content">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class App {}
