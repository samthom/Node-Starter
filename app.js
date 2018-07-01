// all handlers and routes will be here
const  express = require('express');

// mongodb interface
const mongoose = require('mongoose');

// for saving sessions in the mongo
const MongoStore = require('connect-mongo')(session);

// for accesing paths
const path = require('path');

// making req cookies accesible through req.cookies
const cookieParser = require('cookie-parser');

// parsing incoming raw body before handles
const bodyParser = require('body-parser');

// authentication package as per need
// const passport = require('passport');

// for making old function callbacks to promises
// const promisify = require('es6-promisify');

// for flash messages
// const flash = require('connect-flash');

// for server side validation
// const expressValidator = require('express-validator');

// TODO: Have to add remaining modules as per the need

// routes is imported here
const routes = require('./routes/index');

// helper functions
const helpers = require('./helpers');

// error handling functions


// express app initialized
const app = express();

// templating configuration
// this is the place we store the templates
app.set('views', path.join(__dirname, 'views'));
// setting the template engine - pug
app.set('view engine', 'pug');

// setting all middleware that had to be executed before request passed to the controllers

// static file source is specified
app.use(express.static(path.join(__dirname, 'public')));

// using body parser for converting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// functions for validating data in the server side
app.use(expressValidator());

// converting into req.cookies with the cookies came with the request
app.use(cookieParser());

// session mangement
app.use(session({
	secret: process.env.SECRET,
	key: process.env.KEY,
	resave: false,
	saveUinitialized: false,
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


console.warn('Middleware set. Good to go');

module.exports = app;
