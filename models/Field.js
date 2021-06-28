const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FieldSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    specs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'fieldspec'
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Fied = mongoose.model('field', FieldSchema);
