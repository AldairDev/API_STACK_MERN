const express = require('express');
const app = express();
const port = process.env.PORT
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');

const passport = require('passport'); 

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads' ),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime()+ path.extname(file.originalname))
    }
});

// const router = require('./routes/route');

//settings
app.set('port', port || 3002);


//middelware

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'));
app.use(multer({storage}).single('image'));
app.use(cors());
app.use(passport.initialize());

//routes

app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));


module.exports = app;

