const express = require('express')

const router = new express.Router()

router.get('/counsellor', (req, res) => {
    res.send("counsellor")
})

module.exports = router