const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const home = require('./routes/home');

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(bodyParser.json());

app.use('/', home);

const PORT = process.env.PORT || 9001;

app.listen(PORT, (err) => {
    if(!err) {
        console.log(`App listening on port ${PORT}`);
    } else {
        console.error(err);
    }
})