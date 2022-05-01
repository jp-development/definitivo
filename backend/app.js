require('dotenv').config();
const moongose = require('mongoose')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth')

var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



moongose.connect(process.env.DB).then(() => console.log('Conexion exitosa a la base de datos')).catch(error => {
    console.log('Error al conectarse en la base de datos', error)
})

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter )
app.use('/api/advisers', require('./routes/advisers'))
app.use('/api/campaings', require('./routes/campaings'))

module.exports = app;
