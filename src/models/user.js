const mongoose = require('mongoose')
const { isEmail } = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!isEmail(value)) {
                throw new Error('Email is invalid')
            }
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Your password cant contain the word password')
            }
        },
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'Must be 18 y/o or older'],
        max: [120, 'You are too old'],
    },
})

module.exports = User
