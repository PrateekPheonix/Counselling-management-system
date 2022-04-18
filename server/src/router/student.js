const express = require('express')

const router = new express.Router()

router.get('/student', (req, res) => {
    res.send("student")
})

module.exports = router