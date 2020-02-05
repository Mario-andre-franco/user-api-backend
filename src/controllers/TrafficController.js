const mongoose = require('mongoose')

const Traffic = mongoose.model('Traffic')

module.exports = {
    async lastEvent(req,res) {
        const traffic = await Traffic.find({})
        return res.json(traffic)
    },

    async nextEvent(req,res) {
        await Traffic.find({}).sort('arrivalForecast').find(function (err, data) {
            if (err) {
                console.log('error')
            }
            else {
                return res.json(data)
            }
        })
    },

    async nextCar(req,res) {
        const car = await Traffic.create(req.body)
        return res.json(car.arrivalForecast)
    }
}