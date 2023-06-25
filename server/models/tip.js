const mongoose = require('mongoose')

const tipSchema = new mongoose.Schema({
    country: { type: String },
    tips: {
        good: { type: Number },
        standard: { type: Number },
        poor: { type: Number }
    },
    flag: { type: String },
    coin: { type: String }

})

module.exports = mongoose.model('Tip', tipSchema)

