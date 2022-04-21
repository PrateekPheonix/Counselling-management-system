const express = require('express')
const authorize = require('../middleware/authorize')
const Role = require('../helpers/role')

const router = new express.Router()

router.get('/counsellor', authorize(Role.Counsellor), (req, res) => {
    res.send("counsellor")
})

module.exports = router