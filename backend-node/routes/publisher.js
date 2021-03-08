const express = require('express');
const router = express.Router();
const Publisher = require('../models/publisher');


router.get('/', async (req, res, next) => {
    try {
        const publisher = await Publisher.find();
        res.status(200).json(publisher);
    } catch (error) {
        res.status(400);
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const publisher_by_id = await Publisher.findById(id);
        res.status(200).json(publisher_by_id);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const publisher = new Publisher(req.body);
    try {
        const savedPublisher = await publisher.save();
        res.status(201);
        res.json(savedPublisher);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await Publisher.findByIdAndUpdate(id, req.body);
        const publisherUpdated = await Publisher.findById(id);
        res.status(200).json(publisherUpdated);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await Publisher.findByIdAndDelete(id);
        res.status(200).json({message: "Publisher Deleted"});
    } catch (error) {
        res.status(400);
        next(error);
    }
});

module.exports = router;