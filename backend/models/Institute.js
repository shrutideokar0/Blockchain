const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  university: { type: String, required: true },
  instituteId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Institute", instituteSchema);
