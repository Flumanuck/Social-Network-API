const { Schema, Types } = require("mongoose");

const reactSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate,
  },
});

function formatDate(date) {
  // const milliseconds = date * 1000
  // const newDate = new Date(milliseconds)
  // return newDate.toLocaleString()
  return new Date(date).toLocaleString();
}

module.exports = reactSchema;
