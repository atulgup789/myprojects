import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";
import { BooksService } from "./books.service";

//import "rxjs/add/operator/map";


@Component({
    selector: 'app-book',
    templateUrl: './book-detail.component.html',
   
})
export class BookComponent implements OnInit {
    id: any;
    book: any[];
    
    constructor(private _bookService: BooksService, private route: ActivatedRoute,
     private location: Location) {
    }

 ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
     this._bookService.getBook(this.id).subscribe(
        book=>{
          this.book=book;
        });
   
 }

    goBack(): void {
        this.location.back();
    }
}