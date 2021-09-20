const express = require('express');
const router = express.Router();

// For requirement 01 of books
const bookArray = [];

// For requirement 02 of books
router.post('/addBook', (req, res, next) => {
    const newBook = req.body.newBook;

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

    res.redirect('/books/');
});

router.get('/',(req, res, next) => {
    res.render('pages/books', {
        title: 'Prove Activity 02',
        Books: bookArray,
        path: '/books', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;
