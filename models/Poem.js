const mongoose = require("mongoose");

const PoemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  bg: { type: String } // background image optional
});

module.exports = mongoose.model("Poem", PoemSchema);
