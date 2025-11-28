const mongoose = require("mongoose");

const EpisodeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  bg: { type: String } // optional background image
});

module.exports = mongoose.model("Episode", EpisodeSchema);
