webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-default text-center\" style=\"color: green\"></h1>\n<nav>\n  <div class=\"row\">\n    <div class=\"col-xs-4\">\n  <a routerLink=\"about\" routerLinkActive=\"active color: green\" [routerLinkActiveOptions]=\"{exact:true}\"><button class=\"btn btn-default\"  style=\"font-size: 30px\">About</button></a>\n  </div>\n  <div class=\"col-xs-4\">\n    <a routerLink=\"allbook\" routerLinkActive=\"active\"><button class=\"btn btn-default\" style=\"font-size: 30px\">BookDetail</button></a>\n   </div>\n   <div class=\"col-xs-4\">\n     <a routerLink=\"summary\" routerLinkActive=\"active\"><button class=\"btn btn-default\" style=\"font-size: 30px\">BookSummary</button></a>\n    </div>\n    </div>\n    </nav>\n  \n  \n \n  <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_book_detail_component__ = __webpack_require__("../../../../../src/app/books/book-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = AppComponent_1 = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = AppComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__books_book_detail_component__["a" /* BookComponent */], AppComponent_1]
    })
], AppComponent);

var AppComponent_1;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__books_book_detail_component__ = __webpack_require__("../../../../../src/app/books/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__books_books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__books_books_filter_pipe__ = __webpack_require__("../../../../../src/app/books/books-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__books_addbook_form_component__ = __webpack_require__("../../../../../src/app/books/addbook-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__books_editbook_form_component__ = __webpack_require__("../../../../../src/app/books/editbook-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__books_summary_component__ = __webpack_require__("../../../../../src/app/books/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__books_About_component__ = __webpack_require__("../../../../../src/app/books/About.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__books_book_detail_component__["a" /* BookComponent */], __WEBPACK_IMPORTED_MODULE_7__books_books_component__["a" /* BooksComponent */], __WEBPACK_IMPORTED_MODULE_8__books_books_filter_pipe__["a" /* BookFilterPipe */], __WEBPACK_IMPORTED_MODULE_10__books_addbook_form_component__["a" /* AddBookFormComponent */], __WEBPACK_IMPORTED_MODULE_11__books_editbook_form_component__["a" /* EditBookFormComponent */], __WEBPACK_IMPORTED_MODULE_12__books_summary_component__["a" /* BookSummary */], __WEBPACK_IMPORTED_MODULE_13__books_About_component__["a" /* About */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__books_books_service__["a" /* BooksService */], { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_book_detail_component__ = __webpack_require__("../../../../../src/app/books/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_addbook_form_component__ = __webpack_require__("../../../../../src/app/books/addbook-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_editbook_form_component__ = __webpack_require__("../../../../../src/app/books/editbook-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__books_summary_component__ = __webpack_require__("../../../../../src/app/books/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__books_About_component__ = __webpack_require__("../../../../../src/app/books/About.component.ts");







var appRoute = [
    { path: 'allbook', component: __WEBPACK_IMPORTED_MODULE_2__books_books_component__["a" /* BooksComponent */] },
    { path: 'allbook/:id', component: __WEBPACK_IMPORTED_MODULE_1__books_book_detail_component__["a" /* BookComponent */] },
    { path: 'addbook', component: __WEBPACK_IMPORTED_MODULE_3__books_addbook_form_component__["a" /* AddBookFormComponent */] },
    { path: 'updatebook/:id', component: __WEBPACK_IMPORTED_MODULE_4__books_editbook_form_component__["a" /* EditBookFormComponent */] },
    { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_5__books_summary_component__["a" /* BookSummary */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__books_About_component__["a" /* About */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoute);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/books/About.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<body><h1 class=\"default-text text-center\" style=\"color: chocolate\"><em>WELCOME TO THE BOOKSTORE</em></h1></body>\r\n"

/***/ }),

/***/ "../../../../../src/app/books/About.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var About = (function () {
    function About() {
    }
    return About;
}());
About = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'about',
        template: __webpack_require__("../../../../../src/app/books/About.component.html")
    })
], About);

//# sourceMappingURL=About.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/addbook-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Add Book</h1>\r\n  <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Book Title</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"title\" required minlength=\"3\" #nameRef1=\"ngModel\">\r\n      <div *ngIf=\"nameRef1.invalid && (nameRef1.dirty || nameRef1.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef1.errors.required\">\r\n          Title is required.\r\n        </div>\r\n        <div *ngIf=\"nameRef1.errors.minlength\">\r\n          Title must be at least 3 characters long.\r\n        </div>\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group\">\r\n      <label for=\"author\">Author</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"author\" name=\"author\" [(ngModel)]=\"author\" required minlength=\"5\" #nameRef2=\"ngModel\">\r\n      <div *ngIf=\"nameRef2.invalid && (nameRef2.dirty || nameRef2.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef2.errors.required\">\r\n          A name is required.\r\n        </div>\r\n        <div *ngIf=\"nameRef2.errors.minlength\">\r\n          Name must be at least 5 characters long.\r\n        </div>\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group\">\r\n      <label for=\"publisher\">Publisher</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"publisher\" name=\"publisher\" [(ngModel)]=\"publisher\" required minlength=\"3\" #nameRef3=\"ngModel\">\r\n      <div *ngIf=\"nameRef3.invalid && (nameRef3.dirty || nameRef3.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef3.errors.required\">\r\n          Name is required.\r\n        </div>\r\n        <div *ngIf=\"nameRef3.errors.minlength\">\r\n        Name must be at least 3 characters long.\r\n        </div>\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group\">\r\n      <label for=\"publicationDate\">Publication Date</label>\r\n      <input type=\"date\" class=\"form-control\" id=\"publicationDate\" name=\"publicationDate\" [(ngModel)]=\"publicationDate\" required  #nameRef4=\"ngModel\">\r\n      <div *ngIf=\"nameRef4.invalid && (nameRef4.dirty || nameRef4.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef4.errors.required\">\r\n          Date is required.\r\n        </div>\r\n       \r\n      </div>\r\n    </div>\r\n     <div class=\"form-group\">\r\n      <label for=\"price\">Book Price</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"price\" required  #nameRef5=\"ngModel\">\r\n      <div *ngIf=\"nameRef5.invalid && (nameRef5.dirty || nameRef5.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef5.errors.required\">\r\n          Price is required.\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n      <div class=\"form-group\">\r\n      <label for=\"isbn\">ISBN</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"isbn\" name=\"isbn\" [(ngModel)]=\"isbn\" required  #nameRef6=\"ngModel\">\r\n      <div *ngIf=\"nameRef6.invalid && (nameRef6.dirty || nameRef6.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef6.errors.required\">\r\n          ISBN is required.\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"genre\">Genre</label>\r\n      <select class=\"form-control\" name=\"genre\" [ngModel]=\"genre\">\r\n        <option *ngFor=\"let genre of genres\" [value]=\"genre\">\r\n          {{genre}}\r\n        </option>\r\n      </select>\r\n    </div><div class=\"form-group\">\r\n      <label for=\"genre\">Format</label>\r\n      <select class=\"form-control\" name=\"format\" [ngModel]=\"format\">\r\n        <option *ngFor=\"let format of formats\" [value]=\"format\">\r\n          {{format}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n \r\n    <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"formRef.invalid\">Submit</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/books/addbook-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBookFormComponent = (function () {
    function AddBookFormComponent(_bookService, router) {
        this._bookService = _bookService;
        this.router = router;
        this.genres = ["Drama", "Education", "Fiction"];
        this.formats = ["Paperback", "Hardcover", "PDF"];
    }
    AddBookFormComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        console.log("Form Value = " + JSON.stringify(formValue, null, 8)); //PROBLEM
        var newBook = {
            title: formValue.title,
            isbn: formValue.isbn,
            author: formValue.author,
            publicationDate: formValue.publicationDate,
            publisher: formValue.publisher,
            price: formValue.price,
            genre: formValue.genre,
            format: formValue.format,
        };
        this._bookService.addBook(newBook).subscribe(function () {
            _this.router.navigate(['allbook']);
        }, function (err) {
            console.log(err);
        });
    };
    return AddBookFormComponent;
}());
AddBookFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'addbook-form',
        template: __webpack_require__("../../../../../src/app/books/addbook-form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddBookFormComponent);

var _a, _b;
//# sourceMappingURL=addbook-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Book Details</h2>\r\n    <table *ngFor= 'let book of book' style=\"margin-left:20px\">\r\n      <tr>\r\n        <td>ID:</td>\r\n        <td>{{book.id}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Title:</td>\r\n        <td>{{book.title}}</td>\r\n      </tr>\r\n\r\n\r\n      <tr>\r\n        <td>Author:</td>\r\n        <td>{{book.author}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>ISBN:</td>\r\n        <td>{{book.isbn}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>PublicationDate:</td>\r\n        <td>{{book.publicationDate}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Title:</td>\r\n        <td>{{book.title}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Publisher:</td>\r\n        <td>{{book.publisher}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Price:</td>\r\n        <td>{{book.price}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Genre:</td>\r\n        <td>{{book.genre}}</td>\r\n      </tr>\r\n       <tr>\r\n        <td>Format:</td>\r\n        <td>{{book.format}}</td>\r\n      </tr>\r\n\r\n\r\n\r\n    </table>\r\n    <button (click)=\"goBack()\">Back</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/books/book-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import "rxjs/add/operator/map";
var BookComponent = (function () {
    function BookComponent(_bookService, route, location) {
        this._bookService = _bookService;
        this.route = route;
        this.location = location;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
        });
        this._bookService.getBook(this.id).subscribe(function (book) {
            _this.book = book;
        });
    };
    BookComponent.prototype.goBack = function () {
        this.location.back();
    };
    return BookComponent;
}());
BookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-book',
        template: __webpack_require__("../../../../../src/app/books/book-detail.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _c || Object])
], BookComponent);

var _a, _b, _c;
//# sourceMappingURL=book-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/books-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BookFilterPipe = (function () {
    function BookFilterPipe() {
    }
    BookFilterPipe.prototype.transform = function (books, searchby) {
        var filter = searchby ? searchby.toLocaleLowerCase() : null;
        return filter ? books.filter(function (book) {
            return book.title.toLocaleLowerCase().startsWith(filter) != false;
        }) : books;
    };
    return BookFilterPipe;
}());
BookFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'bookFilter' })
], BookFilterPipe);

//# sourceMappingURL=books-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\"><b>List of Available Books with all the Details</b></h2>\r\n<div class='panel panel-primary'>\r\n    <div class='panel-heading'>\r\n        {{title}}\r\n    </div>\r\n    <div class='panel-body'>\r\n        <div class='row'>\r\n            <div class='col-md-2 text-center' style= \"color: lightslategrey; font-size: 30px\" ><em>Search By Book Name:</em></div>\r\n            <div class='col-md-4 text-center'>\r\n                <input placeholder=\"Book Name\" type='text'[(ngModel)]='nameFilter' />\r\n            </div>\r\n        </div>\r\n        <table class='table table-striped table-condensed' *ngIf='books && books.length'>\r\n            <thead>\r\n                <tr>\r\n                    <th style=\"min-width: 80px;\">Title</th>\r\n                    <th style=\"min-width: 80px;\">Author</th>\r\n                    <th style=\"min-width: 100px;\">Publisher</th>\r\n                    <th style=\"min-width: 60px;\">Publication Date</th>\r\n                   <th style=\"min-width: 60px;\">ISBN</th>\r\n                    <th style=\"min-width: 60px;\">Price</th>\r\n                    <th style=\"min-width: 60px;\">Genre</th>\r\n                    <th style=\"min-width: 60px;\">Format</th>\r\n                    <th style=\"width:20px;\"> </th>\r\n                    <th style=\"width:20px;\"> </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor='let book of books | bookFilter: nameFilter'>\r\n                    <td><a [routerLink]=\"book.id\">{{ book.title | uppercase }}</a></td>\r\n                    <td>{{ book.author }}</td>\r\n                    <td>{{ book.publisher }}</td>\r\n                    <td>{{ book.publicationDate | date}}</td>\r\n                   <td>{{ book.isbn }}</td>\r\n                    <td>{{ book.price }}</td>\r\n                    <td>{{ book.genre }}</td>\r\n                    <td>{{ book.format }}</td>\r\n                     <td><a [routerLink]=\"['/updatebook',book.id]\" class=\"btn btn-xs btn-primary\">Edit</a></td>\r\n                    <td><a (click)=\"deleteBook(book.id)\" class=\"btn btn-xs btn-danger\">Delete</a></td>\r\n                    </tr>\r\n            </tbody>\r\n        </table>\r\n      <a routerLink=\"/addbook\" class=\"btn btn-xs btn-primary\">Add Book</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = (function () {
    // PROBLEM
    function BooksComponent(_booksService) {
        this._booksService = _booksService;
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books = this._booksService.getBooks().
            subscribe(function (books) {
            _this.books = books;
        });
        console.log(this.books);
    };
    BooksComponent.prototype.deleteBook = function (bookid) {
        var _this = this;
        this._booksService.deleteBook(bookid).subscribe();
        this.books = this._booksService.getBooks().subscribe(function (books) {
            _this.books = books;
        });
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-books',
        template: __webpack_require__("../../../../../src/app/books/books.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object])
], BooksComponent);

var _a;
//# sourceMappingURL=books.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Book } from "./initial-books";
var BooksService = (function () {
    function BooksService(_http) {
        this._http = _http;
        this._booksUrl = "http://localhost:3000/book";
    }
    BooksService.prototype.getBooks = function () {
        return this._http.get(this._booksUrl)
            .map(function (res) { return res.json(); });
    };
    BooksService.prototype.getBook = function (id) {
        return this._http.get("http://localhost:3000/book/" + id)
            .map(function (res) { return res.json(); });
    };
    BooksService.prototype.addBook = function (newBook) {
        console.log(newBook);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/book', JSON.stringify(newBook), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BooksService.prototype.updateBook = function (updatedBook) {
        console.log(updatedBook);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put('http://localhost:3000/book/' + updatedBook.id, JSON.stringify(updatedBook), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BooksService.prototype.deleteBook = function (id) {
        return this._http.delete("http://localhost:3000/book/" + id)
            .map(function (res) { return res.json(); });
    };
    return BooksService;
}());
BooksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BooksService);

var _a;
//# sourceMappingURL=books.service.js.map

/***/ }),

/***/ "../../../../../src/app/books/editbook-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Update Book</h1>\r\n  <form *ngFor='let book of books' #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Book Title</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"book.title\" required minlength=\"3\" #nameRef1=\"ngModel\">\r\n      <div *ngIf=\"nameRef1.invalid && (nameRef1.dirty || nameRef1.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef1.errors.required\">\r\n          Title is required.\r\n        </div>\r\n        <div *ngIf=\"nameRef1.errors.minlength\">\r\n          Title must be at least 3 characters long.\r\n        </div>\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group\">\r\n      <label for=\"author\">Author</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"author\" name=\"author\" [(ngModel)]=\"book.author\" required minlength=\"5\" #nameRef2=\"ngModel\">\r\n      <div *ngIf=\"nameRef2.invalid && (nameRef2.dirty || nameRef2.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef2.errors.required\">\r\n          A name is required.\r\n        </div>\r\n        <div *ngIf=\"nameRef2.errors.minlength\">\r\n          Name must be at least 5 characters long.\r\n        </div>\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group\">\r\n      <label for=\"publisher\">Publisher</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"publisher\" name=\"publisher\" [(ngModel)]=\"book.publisher\" required minlength=\"3\" #nameRef3=\"ngModel\">\r\n      <div *ngIf=\"nameRef3.invalid && (nameRef3.dirty || nameRef3.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef3.errors.required\">\r\n          Name is required.\r\n        </div>\r\n        <div *ngIf=\"nameRef3.errors.minlength\">\r\n        Name must be at least 3 characters long.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n    <label for=\"price\">ISBN</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"isbn\" name=\"isbn\" [(ngModel)]=\"book.isbn\" required  #nameRef4=\"ngModel\">\r\n      <div *ngIf=\"nameRef4.invalid && (nameRef4.dirty || nameRef4.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef4.errors.required\">\r\n          ISBN is required.\r\n        </div>\r\n        <div *ngIf=\"nameRef4.errors.minlength\">\r\n        </div>\r\n      </div>\r\n      </div>\r\n     <div class=\"form-group\">\r\n      <label for=\"publicationDate\">Publication Date</label>\r\n      <input type=\"date\" class=\"form-control\" id=\"publicationDate\" name=\"publicationDate\" [(ngModel)]=\"book.publicationDate\" required minlength=\"3\" #nameRef=\"ngModel\">\r\n      <div *ngIf=\"nameRef.invalid && (nameRef.dirty || nameRef.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef.errors.required\">\r\n          Date is required.\r\n        </div>\r\n        <div *ngIf=\"nameRef.errors.minlength\">\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group\">\r\n      <label for=\"price\">Book Price</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"book.price\" required  #nameRef5=\"ngModel\">\r\n      <div *ngIf=\"nameRef5.invalid && (nameRef5.dirty || nameRef5.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef5.errors.required\">\r\n          Price is required.\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"genre\">Genre</label>\r\n      <select class=\"form-control\" name=\"genre\" [ngModel]=\"book.genre\">\r\n        <option *ngFor=\"let genre of genres\" [value]=\"genre\">\r\n          {{genre}}\r\n        </option>\r\n      </select>\r\n    </div><div class=\"form-group\">\r\n      <label for=\"genre\">Format</label>\r\n      <select class=\"form-control\" name=\"format\" [ngModel]=\"book.format\">\r\n        <option *ngFor=\"let format of formats\" [value]=\"format\">\r\n          {{format}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n \r\n    <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"formRef.invalid\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/books/editbook-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBookFormComponent = (function () {
    function EditBookFormComponent(_bookService, route, router) {
        this._bookService = _bookService;
        this.route = route;
        this.router = router;
        this.genres = ["Drama", "Education", "Fiction"];
        this.formats = ["Paperback", "Hardcover", "PDF"];
    }
    EditBookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
        });
        this._bookService.getBook(this.id)
            .subscribe(function (book) {
            _this.books = book;
        });
    };
    EditBookFormComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        var updatedBook = {
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
        this._bookService.updateBook(updatedBook).subscribe(function () {
            _this.router.navigate(['allbook']);
        }, function (err) {
            console.log(err);
        });
    };
    return EditBookFormComponent;
}());
EditBookFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'editbook-form',
        template: __webpack_require__("../../../../../src/app/books/editbook-form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], EditBookFormComponent);

var _a, _b, _c;
//# sourceMappingURL=editbook-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\" style=\"color: lightslategrey\">Summary</h2>\r\n<div class='panel panel-primary'>\r\n    <div class='panel-heading'>\r\n        {{title}}\r\n    </div>\r\n    <div class='panel-body'>\r\n        <div class='row'>\r\n            \r\n        <table class='table table-striped table-condensed' *ngIf='books && books.length'>\r\n            <thead>\r\n               \r\n                    <th style=\"min-width: 40px;\">Title</th>\r\n                    <th style=\"min-width: 40px;\">Author</th>\r\n\r\n                    <th style=\"min-width: 30px;\">Price</th>\r\n                    <th style=\"width:20px;\"> </th>\r\n                    <th style=\"width:20px;\"> </th>\r\n                \r\n            </thead>\r\n              <tbody>\r\n                <tr *ngFor='let book of books'>\r\n                    <td>{{ book.title | uppercase }}</td>\r\n                    <td>{{ book.author }}</td>\r\n                  \r\n                    <td>{{ book.price }}</td>\r\n                   \r\n                   \r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n      <button class=\"btn-default\" (click)=\"goBack()\">Back</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/books/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookSummary = (function () {
    function BookSummary(_bookService, route, location) {
        this._bookService = _bookService;
        this.route = route;
        this.location = location;
    }
    BookSummary.prototype.ngOnInit = function () {
        this.books = this._bookService.getBooks();
        console.log(this.books);
    };
    BookSummary.prototype.goBack = function () {
        this.location.back();
    };
    return BookSummary;
}());
BookSummary = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'summary',
        template: __webpack_require__("../../../../../src/app/books/summary.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _c || Object])
], BookSummary);

var _a, _b, _c;
//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map