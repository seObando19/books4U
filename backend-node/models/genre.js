const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
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

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
