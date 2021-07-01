const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: {
        type: String
    },
    subCities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'subcities'
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = City = mongoose.model('cities', CitySchema);