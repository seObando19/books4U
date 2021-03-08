var express = require('express');
var router = express.Router();
const User = require('../models/user');


router.get('/', async function (req, res, next){
    try {
        const users = await User.find();
        ;res.status(200).json(users);
    } catch (error) {
        res.status(400);
        ;next(error);
    }
});

router.get('/:id', async function (req, res, next){
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        ;res.status(200).json(user);
    } catch (error) {
        res.status(400);
        ;next(error);
    }
});

router.post('/', async (req, res, next) => {

    const user = new User({
	name: req.body.name,
	lastname: req.body.lastname,
	age: req.body.age,
	email: req.body.email,
        phone: req.body.phone,
	username: req.body.username,
	password: req.body.password,
	created_at: new Date(),
	updated_at: new Date()
    });
    try {
	const savedUser = await user.save();
	res.status(201);
	res.json(savedUser);
    } catch (error) {
	res.status(400);
	next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
	const deleteUser = await User.findByIdAndDelete(id);
	;res.status(200).json(deleteUser);
    } catch (error) {
	res.status(4000);
	;next(error);
    }

})

router.put('/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body);
        ;res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400);
        ;next(error);
    }
});

module.exports = router;
