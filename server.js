require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const funcionariosController = require('./controllers/funcionariosController');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');


app.listen(3000), () => {
  console.log('Express server iniciou na porta: 3000');
}

app.use('/funcionarios', funcionariosController);