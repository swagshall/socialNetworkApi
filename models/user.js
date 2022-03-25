const { Schema, model } = require('mongoose');
const moment = require('moment');


const UserSchema = new Schema({
  username: {
    type: String,
    required: false,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
      }
    ],
  friends: [
      {
          type: Schema.Types.ObjectId,
          ref: 'User'
      }
  ]
  },
  { 
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
}
);

const User = model('User', UserSchema);

// get total count of friends
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});


 
module.exports = User;
