// CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const id = new ObjectID()
console.log(id)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)
//     db.collection('users').insertMany(
//         [
//             {
//                 name: 'Alex',
//                 age: 24,
//             },
//             {
//                 name: 'Loki',
//                 age: 1.5,
//             },
//         ],
//         (error, result) => {
//             if (error) {
//                 return console.log('Unable to insert users')
//             }
//             console.log(result.ops)
//         }
//      )
// })
