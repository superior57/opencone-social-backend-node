const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    ad: {
        type: Schema.Types.ObjectId,
        ref: 'ads'
    },
    message: {
        type: String
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Comment = mongoose.model('comments', CommentSchema);
