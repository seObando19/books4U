const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: {
	type: String,
	required: true,
    },
    lastname: {
	type: String,
	required: true,
    },
    age: {
	type: Number,
	required: false,
    },
    email: {
	type: String,
	required: true,
	unique: true
    },
    phone: {
	type: String,
	required: false,
    },
    username: {
	type: String,
	required: true,
	unique: true
    },
    password: {
	type: String,
	required: true,
    },
    type_user: [{
	type: mongoose.Types.ObjectId,
	ref: 'Modo_Of_Acess',
	required: false
    }],
}, {
	timestamps: true
});

const Users = mongoose.model('User', UsersSchema);

module.exports = Users;
