var path = require('path');
var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var addnode=require('./webserver/routes/addNodeAndRelations/addNode')

var addKnowledge=require('./webserver/routes/addKnowledge/question');
var askQuestion = require('./webserver/routes/askQuestion/processQuestion');
var questionCategory = require('./webserver/routes/questionsCategory/questionsCategory');
var app = express();
var compiler = webpack(config);
const configDB = require('./webserver/config/database');
const requestAuthenticate = require('./webserver/middleware/requestAuthenticate');
const RegisteredUser= require('./webserver/models/tempUserModel');

// Mongoose
// pass passport for configuration
require('./webserver/config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', express.static(path.join(__dirname, './webclient/')));


// Mongoose
mongoose.connect(configDB.url);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connnected with mongo');
});

// required for passport
app.use(session({
  secret: 'dfsdfd', // session secret
  resave: true,
  saveUninitialized: true
}));
// use connect-flash for flash messages stored in session
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


// dummy protected routes

app.get('/secret', requestAuthenticate, function(req, res) {
  res.json(req.decoded);
});
// load our routes and pass in our app and fully configured passport
require('./webserver/routes/auth.js')(app, passport);

// our routes will be given here
// login routes



//Ruotes
app.use('/qa',addKnowledge);
app.use('/qc',questionCategory);
app.use('/askQuestion',askQuestion);
app.use('/cn',addnode);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
}));

app.use(webpackHotMiddleware(compiler));


//Listening to port 8080
app.listen(8080, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }

    console.log("Server started at 8080");
});
