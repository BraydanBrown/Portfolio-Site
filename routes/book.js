let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to Book Model
let Book = require('../models/books');

// Read Operation
// Get route for the book list page - READ Operation

router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
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

module.exports = router;


