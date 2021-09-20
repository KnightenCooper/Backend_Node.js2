const express = require('express');
const router = express.Router();

// For requirement 01 of books
const bookArray = [];
const bookArrayPrice = [];
// For requirement 02 of books
router.post('/addBook', (req, res, next) => {
  const newBook = req.body.newBook;
  const newBookPrice = req.body.newBookPrice;

    bookArray.push(newBook);
    bookArrayPrice.push(newBookPrice);
    

    res.redirect('/books/');
});

// For requirement 03 of books
router.post('/removeBook', (req, res, next) => {
  const remBook = req.body.remBook;
  const remBookPrice = req.body.remBookPrice;

    // Splice method removes from a const array
    const index = bookArray.indexOf(remBook);
    const index = bookArrayPrice.indexOf(remBookPrice);
    if (index !== -1 ) {
      bookArray.splice(index, 1);
      bookArrayPrice.splice(index, 1);
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

