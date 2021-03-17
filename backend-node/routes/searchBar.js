const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.post('/', async function (req, res, next) {
    let book = req.body;
    try {
        // Tomar nombre del libro
        const book_name = Object.values(book);
        const searched_book = await Book.find( {name : book_name} );
        let book_id = searched_book[0]._id;
        console.log(book_id);
        res.status(200).redirect('http://localhost:3000/buy');
    } catch (error) {
        res.status(400);
        next(error);
    }
});

module.exports = router;
