const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;
const route = require('./routes');
const methodOverride = require('method-override');
const db = require('./config/db')
// connect to db
db.connect();

app.use(express.static(path.join(__dirname,'public')));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
      sum: (a, b) => a+b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('PATH: ', path.join(__dirname, 'resources', 'views'))

// Route init
route(app);

// app.use(
//   express.urlencoded({
//       extended: true,
//   }),
// );
// app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});