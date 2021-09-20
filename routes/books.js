const express = require('express');
const router = express.Router();

// For requirement 01 of books
const bookArray = [];

// For requirement 02 of books
router.post('/addUser', (req, res, next) => {
    const newUser = req.body.newUser;

    bookArray.push(newUser);

    res.redirect('/books/');
});

// For requirement 03 of books
router.post('/removeUser', (req, res, next) => {
    const remUser = req.body.remUser;

    // Splice method removes from a const array
    const index = bookArray.indexOf(remUser);
    if (index !== -1 ) {
        bookArray.splice(index, 1);
    }

    res.redirect('/books/');
});

router.get('/',(req, res, next) => {
    res.render('pages/books', {
        title: 'Team Activity 02',
        users: bookArray,
        path: '/books', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;

