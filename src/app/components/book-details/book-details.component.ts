import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);
  protected book: Book | null = null;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe(book => this.book = book || null);
  }
}
