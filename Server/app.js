
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const Admin = require('./models/admin');
const config = require('./config/database');
var PORT = process.env.PORT || config.database;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pastaRouter = require('./routes/pasta')
var meatRouter = require('./routes/meat')
var fishRouter = require('./routes/fish')
var dessertRouter = require('./routes/dessert')
var drinkRouter = require('./routes/drink')
var ditoreRouter = require('./routes/ditore')
var reservationRouter = require('./routes/reservation')
var reviewRouter = require('./routes/review')





//Connection to database
mongoose.connect(config.database);
  mongoose.connection.on('connected', () =>{
      console.log('Connected to database' +config.database)
  })

  mongoose.connection.on('error', () =>{
    console.log('Database error' +err);
})


var app = express();
app.use(cors());
app.use(express.static(__dirname + '../public'));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());


//routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pasta', pastaRouter);
app.use('/meat', meatRouter);
app.use('/fish', fishRouter);
app.use('/drink', drinkRouter);
app.use('/dessert', dessertRouter);
app.use('/ditore', ditoreRouter);
app.use('/reservation', reservationRouter);

app.use('/review', reviewRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
