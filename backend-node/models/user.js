const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: {
	type: String,
	required: true,
	unique: true
    },
    lastname: {
	type: String,
	required: true,
	unique: true
    },
    age: {
	type: Number,
	required: false,
	unique: false
    },
    email: {
	type: String,
	required: true,
	unique: true
    },
    phone: {
	type: String,
	required: false,
	unique: true
    },
    username: {
	type: String,
	required: true,
	unique: true
    },
    password: {
	type: String,
	required: true,
	unique: true
    },
    type_user: [{
	type: mongoose.Types.ObjectId,
	ref: 'Modo_Of_Acess',
	required: false
    }],
    created_at: {
	type: Date,
	required: true,
	unique: false
    },
    updated_at: {
	type: Date,
	required: true,
	unique: false
    }
});

const Users = mongoose.model('User', UsersSchema);

module.exports = Users;
