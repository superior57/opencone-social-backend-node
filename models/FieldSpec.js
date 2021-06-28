const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FieldSpecSchema = new Schema({
    name: {
        type: String
    },
    field: {
        type: Schema.Types.ObjectId,
        ref: 'fields'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('fieldspec', FieldSpecSchema);