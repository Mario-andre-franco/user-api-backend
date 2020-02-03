const mongoose = require('mongoose')

const Traffic = mongoose.model('Traffic')

module.exports = {
    async lastEvent(req,res) {
        const traffic = await Traffic.find({})
        console.log('return:', traffic)
        return res.json(traffic)
    },

    async nextEvent(req,res) {
        const traffic = await Traffic.find().sort()
        return res.json(traffic)
    },

    async nextCar(req,res) {
        const car = await Traffic.create(req.body)
        return res.json(car)
    }
}