import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { BookComponent} from './books/book-detail.component';
import { BooksService } from './books/books.service';
import { BooksComponent} from './books/books.component';

import { BookFilterPipe} from './books/books-filter.pipe';

import { routing }  from './app.routing';
import {AddBookFormComponent} from './books/addbook-form.component';
import {EditBookFormComponent} from './books/editbook-form.component';
import {BookSummary} from './books/summary.component';
import {About} from './books/About.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [ AppComponent, BookComponent, BooksComponent, BookFilterPipe, AddBookFormComponent, EditBookFormComponent, BookSummary, About ],
  imports: [ BrowserModule, routing, FormsModule, HttpClientModule, HttpModule ],
  providers:  [ BooksService, {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
