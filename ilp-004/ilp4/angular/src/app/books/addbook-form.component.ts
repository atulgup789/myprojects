import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BooksService } from "./books.service";

@Component({
  selector: 'addbook-form',
  templateUrl: './addbook-form.component.html'
})
export class AddBookFormComponent {
  genres: string[] = ["Drama", "Education", "Fiction"];
  formats: string[] = ["Paperback", "Hardcover", "PDF"];
  books: any[];
  constructor(private _bookService: BooksService, private router: Router
  ) { }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 8));      //PROBLEM
    
    let newBook = {
         
          title: formValue.title,
          isbn: formValue.isbn,
          author: formValue.author,
          publicationDate: formValue.publicationDate,
          publisher: formValue.publisher,
          price: formValue.price,
          genre: formValue.genre,
          format: formValue.format,
        };
    this._bookService.addBook(newBook).subscribe(() => {
      this.router.navigate(['allbook']);
  },
  err => {
    console.log(err);
  })
  }

}
