"use strict";

// Imports the NodeJS packages
require('dotenv').config()
const CHALK     = require('chalk'),
	  FIGLET    = require('figlet'),
	  EXPRESS   = require('express'),	  
	  APP       = EXPRESS();

// Imports config & environment variables
const  CONFIG    = require('./config/config')[ENV],
	   ENV       = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Get all the configration
require('./config/express')(APP, CONFIG)
require('./config/api')(APP)
require('./config/routes')(APP)
require('./config/mysql')

// Starting the server
const SERVER_PORT   = CONFIG.port || process.env.PORT
const SERVER        = APP.listen(SERVER_PORT)
console.log(CHALK.blue.bold(FIGLET.textSync('FAQ Service')))
console.log(CHALK.green.bold(`Server Started at port: ${SERVER_PORT}`))