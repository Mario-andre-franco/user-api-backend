const express = require('express')
const routes = express.Router()
const TrafficController = require('./controllers/TrafficController')


//last car left
routes.get('/lastEvent', TrafficController.lastEvent)

//next car arrive
routes.get('/nextEvent', TrafficController.nextEvent)

//test for post infos
routes.post('/nextCar', TrafficController.nextCar)

module.exports = routes
