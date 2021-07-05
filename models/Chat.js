const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    message: {
        type: String
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Chat = mongoose.model('chats', ChatSchema);