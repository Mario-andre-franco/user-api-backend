const mongoose = require('mongoose')
const express = require ('express')
const requireDir = require('require-dir')
const cors = require ('cors')
var dotenv = require('dotenv')

const app = express()
app.use(express.json())
app.use(cors())


//initializing db
const options = {
    useNewUrlParser: true
}
dotenv.config()
var url = process.env.MONGOLAB_URI
mongoose.connect(url, options)

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(3001)