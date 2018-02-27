import { Component, OnInit } from '@angular/core';
import { BooksService } from "./books.service";
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  books: any; 
  // PROBLEM
  constructor(private _booksService: BooksService) { }

  ngOnInit() {
    this.books =  this._booksService.getBooks().
    subscribe(books =>{
      this.books = books;
    });
    console.log(this.books);
  }

  deleteBook(bookid: any) {
    this._booksService.deleteBook(bookid).subscribe();
   this.books = this._booksService.getBooks().subscribe(books => {
      this.books = books;
    })
  }


}