const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
    },
    assignedTo: {
        type: mongoose.Schema.ObjectId,
    },
    requestedBy: {
        type: mongoose.Schema.ObjectId,
        required: true,
    }
}, {
    timestamps: true
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment