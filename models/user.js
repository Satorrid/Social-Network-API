const mongoose = require("mongoose");

const { Schema, model, Types } = mongoose;

const schema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    thoughts: [
      {
        type: Types.ObjectId,
        ref: "thoughts",
      },
    ],
    friends: [
      {
        type: Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

module.exports = model("users", schema);
