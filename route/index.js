'user strict';

module.exports = (app) => {    
    app.get('*', (req, res) => {
       
    });
    app.use( (req, res, next) => {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    app.use( (err, req, res, next) => {
        res.status(err.status || 500);
    });
}