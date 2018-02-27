import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { NgModule } from '@angular/core';
import { Location } from "@angular/common";
import { Router, ActivatedRoute, Params } from "@angular/router";
 
@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
})
export class BookSummary implements OnInit {
  books: any;

  constructor(private _bookService: BooksService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.books= this._bookService.getBooks();
    console.log(this.books);
  }
goBack(): void {
        this.location.back();

}
}
