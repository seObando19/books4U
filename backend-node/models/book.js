const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author:[{
        type: mongoose.Types.ObjectId,
        ref: 'Author',
        required: false
    }],
    genre:[{
        type: mongoose.Types.ObjectId,
        ref: 'NAN',
        required: false
    }],
    publisher:[{
        type: mongoose.Types.ObjectId,
        ref: 'NAN',
        required: false
    }],
    isbn:{
        type: String,
        required: true
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
        required: true
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
