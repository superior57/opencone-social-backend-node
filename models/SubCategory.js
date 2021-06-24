const mongoose = require("mongoose");
const { Schema } = mongoose;

const SubCategorySchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    fields: [
        {
            type: Schema.Types.ObjectId,
            ref: "field"
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = SubCategory = mongoose.model('subCategory', SubCategorySchema);