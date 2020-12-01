const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sentenceSchema = new Schema({
  str: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
});

const Sentence = mongoose.model("Sentence", sentenceSchema);

module.exports = Sentence;
