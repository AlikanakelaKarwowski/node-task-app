const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
    },
    age: {
        type: Number,
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

// const me = new User({
//     name: 'Andrew',
//     age: 'twenty seven',
// })

// me.save()
//     .then(() => {
//         console.log(me)
//     })
//     .catch((err) => {
//         console.log('Error!', err)
//     })

const groomer = new Task({
    description: 'Call the dog groomer',
    completed: false,
})

groomer
    .save()
    .then(() => {
        console.log(groomer)
    })
    .catch((err) => {
        console.log('Error!', err)
    })
