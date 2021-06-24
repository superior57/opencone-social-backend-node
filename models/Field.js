const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FieldSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Fied = mongoose.model('field', FieldSchema);
