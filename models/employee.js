const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  position: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Position",
    required: true,
  },
  salary: { type: Number, required: true },
  hireDate: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Employee", employeeSchema);
