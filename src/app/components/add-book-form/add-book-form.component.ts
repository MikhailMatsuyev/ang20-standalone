import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-add-book-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    RouterLink
  ],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.scss'
})
export class AddBookFormComponent {
  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  private fb: FormBuilder = new FormBuilder();

  public bookForm = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    description: ['', [Validators.required]],
    genres: [[] as string[]]
  });

  genreOptions: string[] = ['Учебник', 'Проза', 'Научпоп'];

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: Book = {
        id: 0,
        ...this.bookForm.value
      } as Book;

      this.bookService.addBook(newBook);
      this.router.navigate(['/']).then();
    }
  }
}
