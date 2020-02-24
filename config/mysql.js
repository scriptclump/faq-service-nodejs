'user strict';

const SEQUELIZE = require('sequelize');
const CHALK     = require('chalk');

const CONNECTION = new SEQUELIZE(process.env.DATABASE_NAME, null, null, {
  dialect: 'mysql',
  port: 3306,
  replication: {
    read: [
      { 
        host: process.env.DATABASE_HOSTNAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
      }
    ],
    write: { 
        host: process.env.DATABASE_HOSTNAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
      }
  },
  pool: {
    maxConnections: 20,
    maxIdleTime: 30000
  },
});

CONNECTION.authenticate()
    .then(function () {
        console.log(CHALK.green.bold("==>  Database connection has been established successfully!!"));
    })
    .catch(function (err) {
        console.log(CHALK.red.bold("==>  There is an error in database connection"));
    })
    .done();

module.exports = CONNECTION;