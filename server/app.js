const express = require('express');
const app = express();
const port = process.env.PORT
const cors = require('cors');
const morgan = require('morgan');
// const router = require('./routes/route');

//settings
app.set('port', port || 3001);



//middelware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
//routes

app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));


module.exports = app;