import { Routes } from '@angular/router';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {AddBookFormComponent} from './components/add-book-form/add-book-form.component';

export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'add-book', component: AddBookFormComponent },
  { path: '**', redirectTo: '' }
];

