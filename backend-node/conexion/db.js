const mongoose = require('mongoose')
const {BOOKS_USER, BOOKS_PASS, BOOKS_DB} = process.env

mongoose.connect(`mongodb+srv://${BOOKS_USER}:${BOOKS_PASS}@cluster0.57q03.mongodb.net/${BOOKS_DB}?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));