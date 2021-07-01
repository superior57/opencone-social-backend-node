const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubCitySchema = new Schema({
    name: {
        type: String
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'cities'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = SubCity = mongoose.model('subcities', SubCitySchema);