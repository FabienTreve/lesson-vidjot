const express = require('express');
const path = require('path');
const exphbs  = require("express-handlebars");
const flash  = require("connect-flash");
const session  = require("express-session");
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

//Load routes
const ideas = require('./routes/ideas');
const users = require('./routes/users');

//Passport Config
require('./config/passport')(passport);
const db = require('./config/database');

// Map global promise = get rid of warning (/!\ Pas necessaire, pas la même version que dans le tuto)
mongoose.Promise = global.Promise;

// Connect to Mongoose
//mongoose.connect(process.env.mongoURI, {
mongoose.connect(db.mongoURI, {
    //useMongoClient: true,

    // Se débarasser de quelques erreurs
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`MongoDB connected... ${db.mongoURI}`))
.catch(err => console.log(err + db.mongoURI));
/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://FabienT:TODtNi8rldnwQ6x9@clusterftr-wrdqy.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("users");
  // perform actions on the collection object
  client.close();
});*/

// --------------------- MIDDLEWARES ---------------------

//Handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Method Override Middleware
app.use(methodOverride('_method'));

// Session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Global variables
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

// --------------------- MIDDLEWARES ---------------------

// Index Route
app.get('/', (req, res) => {      
    const title = 'Welcome';
    res.render('index', {
        title: title
    });
});        

// About Route
app.get('/about', (req, res) => {
    res.render('about');
}); 


// User routes
app.use('/ideas', ideas);
app.use('/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => {                            // Syntaxe fonction ES6
    console.log(`Server started on port ${port}`);  // Equivalent ES6 à console.log('Server ...' + port); ---- /!\==> ` ` et non ' '
});