const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/mongo');
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', require('./routes/home'));


app.listen(3000, (err)=>{
    if(err) console.log(`ERROR: ${err}`);
    else console.log("Server started at port 3000");
})