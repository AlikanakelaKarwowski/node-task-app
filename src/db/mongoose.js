const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        },
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 18) {
                throw new Error('You must be 18 y/o or older')
            } else if (value > 120) {
                throw new Error('You are too old')
            }
        },
    },
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
})

const me = new User({
    name: 'Lamedrew',
    age: 18,
    email: 'lame@drew.com',
})

me.save()
    .then(() => {
        console.log(me)
    })
    .catch((err) => {
        console.log('Error!', err)
    })

// const groomer = new Task({
//     description: 'Call the dog groomer',
//     completed: false,
// })

// groomer
//     .save()
//     .then(() => {
//         console.log(groomer)
//     })
//     .catch((err) => {
//         console.log('Error!', err)
//     })
