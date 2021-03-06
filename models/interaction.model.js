const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interaction = new Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model("interactions", interaction);
