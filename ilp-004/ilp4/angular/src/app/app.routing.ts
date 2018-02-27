import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './books/book-detail.component';
import { BooksComponent} from './books/books.component';
import {AddBookFormComponent} from './books/addbook-form.component';
import {EditBookFormComponent} from './books/editbook-form.component';
import {BookSummary} from './books/summary.component';
import {About} from './books/About.component';
const appRoute =[
    {path: 'allbook', component: BooksComponent },

    {path: 'allbook/:id', component: BookComponent},
    {path: 'addbook', component: AddBookFormComponent},

    {path: 'updatebook/:id', component: EditBookFormComponent}, 
    {path: 'summary', component: BookSummary},
    {path: 'about', component: About}
];
export const routing = RouterModule.forRoot(appRoute);