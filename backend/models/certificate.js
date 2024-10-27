const mongoose = require('mongoose');
const CertificateSchema = new mongoose.Schema({
  studentId: String,
  certificateId: String,
  name: String,
  course: String,
  dateIssued: Date,
});

module.exports = mongoose.model('Certificate', CertificateSchema);
