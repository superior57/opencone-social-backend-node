const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const CategorySchema = new Schema({
    name: {
        type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = Post = mongoose.model('category', CategorySchema);
  