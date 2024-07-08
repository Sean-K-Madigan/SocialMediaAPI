const { Schema, Types} = require('mongoose');

const thoughtSchema = new Schema(
  {
      thoughtText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280
      },
      createdAt: {
          type: Date,
          default: Date.now
      },
      username: {
          type: String,
          required: true
      },
      reactions: [
          {
              type: Schema.Types.ObjectId,
              ref: 'Reaction'
          }
      ]
  },
  {
      toJSON: {
          getters: true
      },
      id: false
  }
);

module.exports = thoughtSchema;