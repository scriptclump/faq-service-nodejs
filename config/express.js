'user strict';

const BODY_PARSER   = require('body-parser'),
	  CROS          = require('cors');

module.exports = (app) => {
    app.use(CROS());
    app.use(BODY_PARSER.json());
    app.use(BODY_PARSER.urlencoded({ extended: true }));
    app.use(CROS());
}