const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


const ReactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 280
      },
      username: {
        type: String,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

  module.exports = ReactionSchema; 