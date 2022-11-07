let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to Book Model
let book = require('../models/books');

// Read Operation
// Get route for the book list page - READ Operation

// router.get("/book/create", book_)

router.get('/', (req, res, next) => {
    book.find((err, bookList) => {
        if(err) {
            return console.error(err);
        }
        else {
            console.log(bookList);
            res.render('book', {
                title:'Book List', 
                bookList: bookList
            });
        }
    });
});

// router.post('/book-list', function(req, res, next) {
//     req.assert('name', 'Name is required').notEmpty();
//     req.assert('author', 'Author is required').notEmpty();
//     req.assert('published', 'Published is required').notEmpty();
//     req.assert('description', 'Description is required').notEmpty();
//     req.assert('price', 'Price is required').notEmpty();
    
//     let errors = req.validationErrors();

//     if (!errors) {
//         let bookDetails = new book ({
//             name: req.body.name,
//             author: req.body.author,
//             published: req.body.published,
//             description: req.body.description,
//             price: req.body.price,
//         });

//         bookDetails .save((err, doc) => {
//             if (!err)
//                 req.flash('success', 'Book successfully added!');
//                 req.redirect('/');
//             else {
//                 console.log(err);
//             }
//         });
//     } 
// else {
//     var errorInfo = "";
//     errors.forEach(function(error) {
//         errorInfo += error.msg + '<br>';
//     });

//     req.flash('error', errorInfo);

//     res.render('book', {
//         title:'Book List', 
//         bookList: bookList
//     });

// }

module.exports = router;
