const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({    
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Contact = mongoose.model('contacts', ContactSchema);