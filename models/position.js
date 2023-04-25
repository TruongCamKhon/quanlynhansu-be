const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
});

module.exports = mongoose.model("Position", positionSchema);
