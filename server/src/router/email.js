const express = require('express')
const authorize = require('../middleware/authorize')
const Role = require('../helpers/role')
const sendEmail = require('../utils/sendemail')

const router = new express.Router()

router.post('/email/appointment/create', authorize(), async (req, res) => {

    try {
        const { email } = req.body
        const from = "bruh.teek25@gmail.com"
        const to = email
        const subject = "Your Request for Appointment have been created"
        const output = `
        <h1>Your Session Has been Booked!!</h1>
        `
        sendEmail(to, from, subject, output)
        res.send("Email sent successfully!")
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/email/appointment/update', authorize(), async (req, res) => {

    try {
        const { email } = req.body
        const from = "bruh.teek25@gmail.com"
        const to = email
        const subject = "Your Appointment have been Re-scheduled"
        const output = `
        <h1>Your Session Has been Rescheduled!!</h1>
        `
        sendEmail(to, from, subject, output)
        res.send("Email sent successfully!")
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router