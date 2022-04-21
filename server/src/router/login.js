const express = require('express')
const User = require('../models/users')

const router = new express.Router()


router.post('/signup', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/logout', async (req, res) => {
    try {
        console.log(req)
        const user = await User.updateOne({ token: req.user.token }, { $set: { token: "" } })
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router