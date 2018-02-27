//var Bookdb = require('../data/bookApi');
var express = require('express');
var router = express.Router();
//home page
router.get('/', function(req, res, next){
      req.Book.find(function(err, bookdata){
    if(err){
        res.send(err);
    }
  res.json(bookdata);
	});
});

//finding a particular book from server

router.get('/:id', function(req, res, next){
  req.Book.find({id:req.params.id}, {_id:0,_v:0}, function(err,book){
    if(err){
      res.send(err);
    }
    res.json(book);
  });

});

//adding a book in server

router.post('/', function(req, res, next) {
  var newbook = new req.Book(req.body);
  req.Book.count({}, function(err, n){
    if(err)
    console.log("error in saving", err);
    else{
        newbook.id = n+1;
        newbook.save(function(err,book){
           if(err){
      res.send(err);
    }
    res.json(newbook);
        })
    }
  })
})

 

//update book
router.put('/:id', function(req, res, next) {
  req.Book.update({id: req.params.id}, {$set: {
          title: req.body.title,
          author: req.body.author,
          isbn: req.body.isbn,
          publicationDate: req.body.publicationDate,
          publisher: req.body.publisher,
          price: req.body.price,
          genre: req.body.genre,
          format: req.body.format}}, 
          function(err,book){
    if(err){
      res.send(err);
    }
    res.json(book);
  }); 

});


// delete book
router.delete('/:id', function(req, res, next) {
  req.Book.remove({id: req.params.id}, function(err, book) {
    if(err){
      res.send(err);
    }
    console.log("Book deleted..");
    res.json(book);
  });
});

module.exports = router;
