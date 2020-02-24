'user strict';

const SEQUELIZE = require('sequelize');
const CHALK     = require('chalk');

const CONNECTION = new SEQUELIZE('payment_service', null, null, {
  dialect: 'mysql',
  port: 3306,
  replication: {
    read: [
      { host: 'localhost', username: 'root', password: 'Ebutor@123' }
    ],
    write: { host: 'localhost', username: 'root', password: 'Ebutor@123' }
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