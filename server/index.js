const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(bodyParser());

const router = app.router();
router.get('/home', (req, res) => {
    res.send('hello')
});

const PORT = process.env.PORT || 9001;

app.listen(PORT, (err) => {
    if(!err) {
        console.log(`App listening on port ${PORT}`);
    } else {
        console.error(err);
    }
})