const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
      username: {
          type: String,
          unique: true,
          required: 'You need to provide a username!',
          trim: true
      },
      email: {
          type: String,
          required: 'You need to provide an email!',
          unique: true,
          match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
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
              ref: 'Friend'
          }
      ],
  });