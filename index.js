const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');


// const router = require('./routes/api/members')
// const members = require('./Members');


const app = express();
app.use(cors());

//Handlebar middleware
app.engine('handlebars', exphbs({
    extname: "handlebars",
    defaultLayout: "main",
    layoutsDir: "views/layout/"
  }));
app.set('view engine', 'handlebars');


// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//index Rout
app.get('/', (req,res) => {

  res.render('auth');
}); 

//Home Rout
app.get('/home', (req,res) => {

  res.redirect('/api/members/');
  // res.render('home', {title: 'Members App'});
}); 





//Api auth Router
app.use('/auth', require('./routes/api/auth'));

//Api members Router
app.use('/api/members', require('./routes/api/members'));



// static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 7000;

app.listen(PORT, ()=>console.log(`Server started on the port: ${PORT}`));