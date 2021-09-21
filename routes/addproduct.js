const express = require('express');
const router = express.Router();

// DOES NOT HANDLE THE SYNTAX FOR BOOKS AND PRICES _____________________ books.js does
const bookArray = [];
// const bookArrayPrice = [];

// For requirement 02 of books
router.post('/addBook', (req, res, next) => {
    const newBookPrice = req.body.newBook;
    // const newBookPrice = req.body.newBook;

    bookArray.push(newBook);

    res.redirect('/books/');
});

// For requirement 03 of books
router.post('/removeBook', (req, res, next) => {
    const remBook = req.body.remBook;

    // Splice method removes from a const array
    const index = bookArray.indexOf(remBook);
    if (index !== -1 ) {
        bookArray.splice(index, 1);
    }

    res.redirect('/addproduct/');
});

router.get('/',(req, res, next) => {
    res.render('pages/addproduct', {
        title: 'Prove Activity 02',
        Books: bookArray,
        path: '/addproduct', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;

