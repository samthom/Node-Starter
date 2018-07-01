
// Database connectivity
const mongoose = require('mongoose');

// Importing  database config to the program
require('dotenv').config({ path: 'variables.env' });

// connecting to the database
mongoose.connect(process.env.DATABASE)

// Handling connection error
mongoose.connection.on('error', (err)=>{
	console.error(`☹ ☹  something went wrong ${err.message}`);
});

/*
	MODELS TO BE IMPORTED HERE
*/



// Starting out server and application
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), ()=>{
	console.warn(` Our app is running at ${ server.address().port } `);
});
