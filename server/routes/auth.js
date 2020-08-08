const express = require('express');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.status(200).json({
        "hello": "hi"
    })
});

module.exports = router;

