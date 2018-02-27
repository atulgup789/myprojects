import { Component } from '@angular/core';
import { BookComponent} from './books/book-detail.component';
import { NgModule } from '@angular/core';
import { BooksService } from './books/books.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
    declarations: [BookComponent, AppComponent]
})
export class AppComponent {
  title = 'app';
}
