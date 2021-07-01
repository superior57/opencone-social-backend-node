const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const CategorySchema = new Schema({
    name: {
        type: String
    },
    subCategories: [
      {
        type: Schema.Types.ObjectId,
        ref: "subCategory"
      }
    ],
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = Category = mongoose.model('categories', CategorySchema);
  