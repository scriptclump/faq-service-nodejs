"use strict";

// Imports the NodeJS packages
require('dotenv').config()
const CHALK     = require('chalk'),
	  FIGLET    = require('figlet'),
	  EXPRESS   = require('express'),	  
	  APP       = EXPRESS();

// Imports config & environment variables
const  ENV      = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Get all the configration
require('./config/express')(APP)
require('./config/mysql')

// Routes
var routes = require('./route/faq')(APP)
routes(APP); //register the route


// Starting the server
const SERVER_PORT   = process.env.PORT
const SERVER        = APP.listen(SERVER_PORT)
console.log(CHALK.blue.bold(FIGLET.textSync('FAQ Service')))
console.log(CHALK.green.bold(`Server Started at port: ${SERVER_PORT}`))