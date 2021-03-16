const express = require('express');
const router = express.Router();

router.get('/', async function (req, res, next) {
    console.log("hola mundo");
    res.status(200);
});

module.exports = router;
