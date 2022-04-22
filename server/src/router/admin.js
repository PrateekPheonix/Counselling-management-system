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
router.get('/admin/student/all', authorize(Role.Admin), async (req, res) => {
    try {
        const users = await User.find({ role: Role.Student }).select(['-password', '-token'])
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get('/admin/counsellor/all', authorize(Role.Admin), async (req, res) => {
    try {
        const users = await User.find({ role: Role.Counsellor }).select(['-password', '-token'])
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get('/admin/appointment/all', authorize(Role.Admin), async (req, res) => {
    try {
        const appointments = await Appointment.find({})
        res.send(appointments)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get('/admin/appointment/unassigned', authorize(Role.Admin), async (req, res) => {
    try {
        const appointments = await Appointment.find({ assignedTo: { $exists: false } })
        res.send(appointments)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get('/admin/appointment/assigned', authorize(Role.Admin), async (req, res) => {
    try {
        const appointments = await Appointment.find({ assignedTo: { $exists: true } })
        res.send(appointments)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.put('/admin/user/update', authorize(Role.Admin), async (req, res) => {
    await User.findOneAndUpdate({ _id: req.body.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });
})
router.put('/admin/appointment/update', authorize(Role.Admin), async (req, res) => {
    await Appointment.findOneAndUpdate({ _id: req.body.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });
})

router.delete('/admin/appointment/delete', authorize(Role.Admin), async (req, res) => {
    try {
        const appointment = await Appointment.findOneAndDelete({ _id: req.body.id })

        if (!appointment) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})
router.delete('/admin/user/delete', authorize(Role.Admin), async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.body.id })

        if (!user) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router