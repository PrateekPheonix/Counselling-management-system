const express = require('express')
const authorize = require('../middleware/authorize')
const Role = require('../helpers/role')

const router = new express.Router()

router.get('/admin', authorize(Role.Admin), (req, res) => {
    res.send("admin")
})

module.exports = router