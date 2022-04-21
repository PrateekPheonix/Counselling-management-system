const express = require('express')
const authorize = require('../middleware/authorize')
const Role = require('../helpers/role')

const router = new express.Router()

router.get('/student', authorize(Role.Student), (req, res) => {
    res.send("student")
})

module.exports = router