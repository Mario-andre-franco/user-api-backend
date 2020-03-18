const moongose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

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

TrafficSchema.plugin(mongoosePaginate)
moongose.model("Traffic", TrafficSchema)