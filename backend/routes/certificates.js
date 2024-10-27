const express = require('express');
const auth = require('../middleware/auth');
const Certificate = require('../models/certificate');
const multer = require('multer');
const xlsx = require('xlsx');
const { PDFDocument, rgb } = require('pdf-lib');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Upload student data (Admin only)
router.post('/upload', auth, upload.single('file'), async (req, res) => {
  try {
    const workbook = xlsx.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    // Insert each student record in the database
    await Promise.all(data.map(async (student) => {
      const certificate = new Certificate({ ...student });
      await certificate.save();
    }));

    res.json({ message: 'Data uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading data' });
  }
});

// Generate and download certificate
router.get('/download/:certificateId', auth, async (req, res) => {
  try {
    const certificate = await Certificate.findOne({ certificateId: req.params.certificateId });
    if (!certificate) return res.status(404).json({ message: 'Certificate not found' });

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    page.drawText(`Certificate of Completion`, { x: 200, y: 300, size: 24, color: rgb(0, 0.53, 0.71) });
    page.drawText(`This certifies that ${certificate.name} has completed the course ${certificate.course}`, { x: 100, y: 250, size: 12 });
    const pdfBytes = await pdfDoc.save();

    res.setHeader('Content-Disposition', `attachment; filename=certificate.pdf`);
    res.contentType('application/pdf');
    res.send(pdfBytes);
  } catch (err) {
    res.status(500).json({ message: 'Error generating certificate' });
  }
});

module.exports = router;
