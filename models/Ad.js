const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    sub_category: {
        type: Schema.Types.ObjectId,
        ref: 'subCategory'
    },
    contact_name: {
        type: String
    },
    contact_email: {
        type: String
    },
    images: [
        {
            type: String
        }
    ],
    specs: {
        type: JSON,
    },
    price: {
        type: Number
    },
    currency: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'cities'
    },
    subCity: {
        type: Schema.Types.ObjectId,
        ref: 'subcities'
    },
    order: {
        type: Schema.Types.Number
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comments'
        }
    ],
    is_blocked: {
        type: Schema.Types.Number,
        default: 0
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Ad = mongoose.model('ads', AdSchema);