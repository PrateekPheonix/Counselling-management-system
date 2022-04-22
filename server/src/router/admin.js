const express = require('express')
const authorize = require('../middleware/authorize')
const Role = require('../helpers/role')
const Appointment = require('../models/appointment')
const User = require('../models/users')

const router = new express.Router()

router.get('/admin', authorize(Role.Admin), async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id }).select(['-password', '-token'])
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router