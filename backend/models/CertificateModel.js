const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  course: { type: String, required: true },
  university: { type: String, required: true },
  ipfsHash: { type: String, required: true },
  status: { type: String, default: "Issued" }
});

const CertificateModel = mongoose.model("Certificate", CertificateSchema);
module.exports = CertificateModel;
