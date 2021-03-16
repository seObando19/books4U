const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Author',
        required: true
    }],
    genre:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Genre',
        required: true
    }],
    publisher:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Publisher',
        required: true
    }],
    isbn:{
        type: String,
        required: false
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    image:{
        type: String,
        required: true
    },
    raiting:{
        type: Number,
        required: false
    },
    number_pages:{
        type: Number,
        required: false
    },
    release_year:{
        type: Number,
        required: false
    }
}, {
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
