const express = require('express')
const authorize = require('../middleware/authorize')
const Role = require('../helpers/role')
const Appointment = require('../models/appointment')
const User = require('../models/users')

const router = new express.Router()

router.get('/counsellor', authorize(Role.Counsellor), async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id }).select(['-password', '-token'])
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get('/counsellorRead', authorize(Role.Counsellor), async (req, res) => {
    try {
        const users = await Appointment.find({ assignedTo: req.user._id })
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router