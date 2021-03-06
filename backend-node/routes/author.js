const express  = require('express');
const router = express.Router();
const Author = require('../models/author');

router.get('/', async function (req, res, next){
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.get('/:id', async function (req, res, next){
    const { id } = req.params;
    try {
        const authors = await Author.findById(id);
        res.status(200).json(authors);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.post('/', async function (req, res, next) {
    const author = new Author(req.body);
    try {
        const savedAuthor = await author.save();
        res.status(201).json(savedAuthor);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.put('/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        const updatedAuthor = await author.findByIdAndUpdate(id, req.body);
        res.status(200).json(updatedAuthor);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.delete ('/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        const deletedAuthor = await Author.findByIdAndDelete(id);
        res.status(200).json(deletedAuthor);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

module.exports = router;
