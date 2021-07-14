const mongoose = require('mongoose')
const { isEmail } = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

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

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

// const me = new User({
//     name: '   Alexander   ',
//     email: '  MYEmail@mlm.COM',
//     password: '  passwor',
//     age: 18,
// })

// me.save()
//     .then(() => {
//         console.log(me)
//     })
//     .catch((err) => {
//         console.log('Error!', err)
//     })

const groomer = new Task({
    description: '    Call the dog groomer    ',
})

groomer
    .save()
    .then(() => {
        console.log(groomer)
    })
    .catch((err) => {
        console.log('Error!', err)
    })
