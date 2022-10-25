const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const reactions = new Reactions(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 300,
    },
    username: {
      type: String,
      required: true,
    },
    timeCreated: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const thoughts = new Thoughts(
  {
    thoughtsText: {
      type: string,
      required: true,
      minlength: 1,
      maxlength: 300,
    },
    timeCreated: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: string,
      required: true,
    },
    reactions: [reactions],
  },
  {
    toJson: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
