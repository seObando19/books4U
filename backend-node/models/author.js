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
}, {
    timestamps: true
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
