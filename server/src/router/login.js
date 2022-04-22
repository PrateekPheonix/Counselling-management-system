const express = require('express')
const authorize = require('../middleware/authorize')
const User = require('../models/users')

const router = new express.Router()


router.post('/signup', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/logout', authorize(), async (req, res) => {
    try {
        console.log(req.user)
        const user = await User.updateOne({ _id: req.user._id }, { $set: { token: "" } })
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})


module.exports = router