const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    create_at: {
        type: Date,
        required: false
    },
    updated_at: {
        type: Date,
        required: false
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
