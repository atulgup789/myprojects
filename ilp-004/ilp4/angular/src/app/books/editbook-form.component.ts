import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BooksService } from "./books.service";

@Component({
  selector: 'editbook-form',
  templateUrl: './editbook-form.component.html'
})
export class EditBookFormComponent {
 genres: string[] = ["Drama", "Education", "Fiction"];
  formats: string[] = ["Paperback", "Hardcover", "PDF"];

  constructor(private _bookService: BooksService, private route: ActivatedRoute, private router: Router
  ) { }
  id: any;
  books: any[];

  ngOnInit(): void {
     this.route.params.forEach((params: Params) => {
         this.id = +params['id'];
        });
      this._bookService.getBook(this.id)
      .subscribe(book=>{
        this.books = book;
      });
  }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let updatedBook = {
          id: this.books[0].id,
          title: formValue.title,
          author: formValue.author,
          isbn: formValue.isbn,
          publicationDate: formValue.publicationDate,
          publisher: formValue.publisher,
          price: formValue.price,
          genre: formValue.genre,
          format: formValue.format
        };
    this._bookService.updateBook(updatedBook).subscribe(()=>{
      this.router.navigate(['allbook']);
  },
    err=>{
    console.log(err)
  })
}
}