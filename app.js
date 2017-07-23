
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require(__dirname + '/app/back/config/mongoose.config');

global.__base = __dirname;

var app = express();

global.env_var = app.get('env');

//app.set('views', path.join(__dirname, 'app/views'));
//app.set('view engine', 'html');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

//rutas api
app.use('/api/v1/users', require('./app/back/controllers/api/v1/user.api'));

//ruta por defecto
app.use('/', require('./app/back/controllers/view/index.controllers'));


// catch 401 unauthorized
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            code: 401,
            message: 'Invalid Token - No Authorized',
            content: ''
        });
    }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;