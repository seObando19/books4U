const express = require('express');
const router = express.Router();

router.post('/', function (req, res, next) {
    try {
        console.log(req.body);
        res.status(200).redirect('http://localhost:3000/donate');
    } catch (error) {
        res.status(400);
        next(error);
    }
});

module.exports = router;