const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  gender: {
    type: String
  },
  role: {
    type: String
  },
  is_blocked: {
    type: String,
    default: '0'
  },
  like_ads: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ads'
    }
  ],
  boost_credits: {
    type: Schema.Types.Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);
