const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const now = new Date()
    var message = {
        time: now.toISOString(),
        content: "we got your req, everything is 200",
    };
    res.json({ message: message })
});

module.exports = router
