const { model, Schema } = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
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

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    console.log('just before saving')
    next()
})

const User = model('User', userSchema)

module.exports = User
