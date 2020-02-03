const moongose = require('mongoose')

//schema

const TrafficSchema = new moongose.Schema({
    carNumber: {
        type: String,
        required: true,
    },
    driver: {
        type: String,
        required: true,
    },
    arrivalForecast: {
        type: String,
        required: true
    },
})

moongose.model("Traffic", TrafficSchema)