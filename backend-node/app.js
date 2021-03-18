var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookRouter = require('./routes/book');
var authorRouter = require('./routes/author');
var genreRouter = require('./routes/genre');
var publisherRouter = require('./routes/publisher');
const contactRouter = require('./routes/contact');
const searchBarRouter = require('./routes/searchBar');
var donateRouter = require('./routes/donate');

var cors = require("cors");

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book', bookRouter);
app.use('/author', authorRouter);
app.use('/genre', genreRouter);
app.use('/publisher', publisherRouter);
app.use('/contact', contactRouter);
app.use('/searchBar', searchBarRouter);
app.use('/donate', donateRouter);

module.exports = app;
