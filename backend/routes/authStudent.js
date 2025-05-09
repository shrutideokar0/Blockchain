const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const CertificateModel = require("../models/CertificateModel"); // ✅ Ensure correct path

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Student Sign Up
router.post('/signup', async (req, res) => {
  const { name, email, university, studentId, password } = req.body;

  try {
    const existing = await Student.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Student already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({ name, email, university, studentId, password: hashedPassword });
    await student.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Student Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      console.log("Received login request:", email);
  
      const student = await Student.findOne({ email });
      if (!student) {
        console.log("Student not found");
        return res.status(404).json({ error: 'Student not found' });
      }
  
      const isMatch = await bcrypt.compare(password, student.password);
      if (!isMatch) {
        console.log("Incorrect password");
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign(
        { id: student._id, role: "student" }, // <-- Add this!
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      
  
      console.log("Login successful");
  
      res.json({
        token,
        student: {
          name: student.name,
          email: student.email,
          studentId: student.studentId
        }
      });
  
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  router.get("/certificates", async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.error("Error: No Authorization Header Found");
      return res.status(401).json({ error: "Unauthorized: No Token Provided" });
    }
  
    const token = authHeader.split(" ")[1];
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded Token:", decoded); // 🔥 Debugging: Check token details
  
      if (!decoded || decoded.role !== "student") {
        console.error("Error: Incorrect Role or Invalid Token");
        return res.status(403).json({ error: "Forbidden: Incorrect Role" });
      }
  
      const certificates = await CertificateModel.find({ studentId: decoded.id });
      res.json(certificates);
    } catch (error) {
      console.error("JWT Verification Error:", error.message);
      return res.status(401).json({ error: "Unauthorized: Invalid Token" });
    }
  });
  
  

module.exports = router;
