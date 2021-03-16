const express = require('express');
const router = express.Router();
const Book = require('../models/book');


router.get('/', async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.post('/add', (req, res, next) => {
    try {
        console.log(req.body);
        res.status(200)
    } catch (error) {
        res.status(400);
        next(error);
    }
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const book_by_id = await Book.findById(id);
        res.status(200).json(book_by_id);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const book = new Book(req.body);
    try {
        const savedBook = await book.save();
        res.status(201);
        res.json(savedBook);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await Book.findByIdAndUpdate(id, req.body);
        const bookUpdated = await Book.findById(id);
        res.status(200).json(bookUpdated);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await Book.findByIdAndDelete(id);
        res.status(200).json({message: "Book Deleted"});
    } catch (error) {
        res.status(400);
        next(error);
    }
});

module.exports = router;