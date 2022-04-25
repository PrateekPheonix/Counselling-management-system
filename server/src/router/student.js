const express = require('express')
const authorize = require('../middleware/authorize')
const Appointment = require('../models/appointment')
const User = require('../models/users')
const Role = require('../helpers/role')
const sendEmail = require('../utils/sendemail')

const router = new express.Router()

router.get('/student', authorize(Role.Student), async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id }).select(['-password', '-token'])
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/student/create', authorize(Role.Student), async (req, res) => {
    const appointment = new Appointment(req.body)

    try {
        appointment.requestedBy = req.user._id
        await appointment.save()
        res.status(201).send(appointment)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/student/read', authorize(Role.Student), async (req, res) => {
    try {
        const users = await Appointment.find({ requestedBy: req.user._id })
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports = router