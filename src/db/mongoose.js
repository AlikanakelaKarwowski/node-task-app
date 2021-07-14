const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
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
