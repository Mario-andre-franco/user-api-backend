const mongoose = require('mongoose')
const express = require ('express')
const requireDir = require('require-dir')
const cors = require ('cors')

const app = express()
app.use(express.json())
app.use(cors())

const url = process.env.MONGOLAB_URI

//initializing db
mongoose.connect(
    url,
    {useNewUrlParser: true})

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(3001)