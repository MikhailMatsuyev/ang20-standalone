import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  protected books: Book[] = [];
  protected searchTerm = '';
  private bookService = inject(BookService);

  public ngOnInit(): void {
    debugger
    this.bookService.books$.subscribe(books => this.books = books);
  }

  protected search(): void {
    if (this.searchTerm.trim()) {
      this.bookService.searchBooks(this.searchTerm).subscribe(
        books => this.books = books
      );
    } else {
      this.bookService.books$.subscribe(books => this.books = books);
    }
  }
}
