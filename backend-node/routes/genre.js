const express  = require('express');
const router = express.Router();
const Genre = require('../models/genre');

router.get('/' , async function (req, res, next) {
    try {
        const genres = await Genre.find();
        res.status(200).json(genres);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.get('/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        const genres = await Genre.findById(id);
        res.status(200).json(genres);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.post('/', async function (req, res, next) {
    const genre = new Genre(req.body);
    try {
        const savedGenre = await genre.save();
        res.status(201).json(genres);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.put('/:id' , async function (req, res, next) {
    const { id } = req.params;
    try {
        await Genre.findByIdAndUpdate(id, req.body);
        const genreUpdated = await Genre.findById(id);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.delete('/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        await Genre.findByIdAndDelete(id);
        res.status(200).json({message: "Genre Deleted"});
    } catch (error) {
        res.status(400);
        next(error);
    }
});

module.exports = router;
