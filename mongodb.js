// CRUD Create Read Update Delete

const { MongoClient, ObjectID } = require('mongodb')

const id = new ObjectID()
console.log(id)
console.log(id.id)
console.log(id.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
})
