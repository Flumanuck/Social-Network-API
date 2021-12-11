const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: "Text is required.",
    minLength: 1,
    maxlength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate,
  },

  username: {
    type: String,
    required: "Username is required",
  },

  reactions: [reactionSchema],
});

function formatDate(date) {
  // const milliseconds = date * 1000
  // const newDate = new Date(milliseconds)
  // return newDate.toLocaleString()
  return new Date(date).toLocaleString();
}

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
