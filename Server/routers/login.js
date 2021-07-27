const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {

    responseBody = {
        isValid: true,
        name: req.body.name,
    }

    res.send(responseBody)
})

module.exports = router;
