const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
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

const Publisher = mongoose.model('Publisher', genreSchema);

module.exports = Publisher;
