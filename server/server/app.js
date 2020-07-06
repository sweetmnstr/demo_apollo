const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('../schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = 3005

const URL = 'mongodb+srv://ollivolt:ollivoltpass@cluster0-dhkwx.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'main'})

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const dbConnection = mongoose.connection
dbConnection.on('error', err => console.log(`Connection error: ${err}`))
dbConnection.once('open', () => console.log('DB Connected'))

app.listen(PORT, (err) => err ? console.log(err) : console.log('Server Started'))