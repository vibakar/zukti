let path = require('path');
let webpack = require('webpack');
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let config = require('./webpack.config');
let retriveChat = require('./webserver/routes/retriveChats/chats');
let getLexicon = require('./webserver/lexicon/getLexicon');
let intent = require('./webserver/routes/intent/intent');
let addKnowledge = require('./webserver/routes/addKnowledge/question');
let askQuestion = require('./webserver/routes/getReply/reply');
let getAdmin = require('./webserver/routes/getAdmin/getadminUser');
let savebroadcastmessage = require('./webserver/routes/broadcastmessage/broadcastmessage');
let getbroadcastmessage = require('./webserver/routes/broadcastmessage/getbroadcastmessage');
let app = express();
let compiler = webpack(config);
let addnode=require('./webserver/routes/addNodeAndRelations/addNode');

const configDB = require('./webserver/config/database');
const requestAuthenticate = require('./webserver/middleware/requestAuthenticate');
const uploadimage = require('./webserver/routes/uploadimage');



// Mongoose
// pass passport for configuration
require('./webserver/config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', express.static(path.join(__dirname, './webclient/')));

// get all lexicon terms from neo4j and save it a json file in lexicon folder
getLexicon();

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
app.use('/', uploadimage);

//Routes

app.use('/savebroadcastmessage',savebroadcastmessage);
app.use('/getbroadcastmessage',getbroadcastmessage);
app.use('/getadmin',getAdmin);
app.use('/intent',intent);
app.use('/qa', addKnowledge);
app.use('/question', askQuestion);
app.use('/retriveChat',retriveChat)
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
app.use('/cn', addnode);


//Listening to port 8080
var server=app.listen(8080, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }

    console.log("Server started at 8080");
});



let io = require('socket.io')(server);
// socket.io demo
io.on('connection', function (socket) {
  socket.emit('server event', { foo: 'bar' });
  socket.on('client event', function (data) {
    socket.broadcast.emit('update label', data);
  });
});
