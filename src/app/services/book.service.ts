import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, map, tap} from 'rxjs';
import {Book} from '../models/book.model';

@Injectable({providedIn: 'root'})
export class BookService {
  private booksUrl = 'assets/books.json';
  private booksSubject = new BehaviorSubject<Book[]>([]);
  public books$ = this.booksSubject.asObservable();
  private http = inject(HttpClient)

  constructor() {
    this.loadBooks();
  }

  private loadBooks(): void {
    this.http.get<Book[]>(this.booksUrl).pipe(
      tap(books => this.booksSubject.next(books))
    ).subscribe();
  }

  public getBookById(id: number): Observable<Book | undefined> {
    return this.books$.pipe(
      map(books => books.find(book => book.id === id))
    );
  }

  public addBook(book: Book): void {
    const currentBooks = this.booksSubject.value;
    const newId = Math.max(...currentBooks.map(b => b.id), 0) + 1;
    this.booksSubject.next([...currentBooks, {...book, id: newId}]);
  }

  public searchBooks(term: string): Observable<Book[]> {
    return this.books$.pipe(
      map(books =>
        books.filter(book =>
          book.title.toLowerCase().includes(term.toLowerCase()) ||
          book.author.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }
}
