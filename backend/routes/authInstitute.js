const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Institute = require("../models/Institute");
// const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;


// Institute Signup
router.post("/signup", async (req, res) => {
  const { name, email, university, instituteId, password } = req.body;

  try {
    const existing = await Institute.findOne({ email });
    if (existing) return res.status(400).json({ error: "Institute already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const institute = new Institute({ name, email, university, instituteId, password: hashedPassword });
    
    await institute.save();
    res.status(201).json({ message: "Institute registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Institute Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const institute = await Institute.findOne({ email });
    if (!institute) return res.status(404).json({ error: "Institute not found" });

    const isMatch = await bcrypt.compare(password, institute.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const token = jwt.sign(
      { id: institute._id, role: "institute" },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.json({ token, institute: { name: institute.name, email: institute.email, instituteId: institute.instituteId } });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
    console.log(err);
  }
});

// Get Issued Certificates (Protected Route)
// router.get("/certificates", verifyToken, async (req, res) => {
//   try {
//     const instituteId = req.userId;
//     const certificates = await Certificate.find({ issuerId: instituteId });

//     res.json(certificates);
//   } catch (err) {
//     res.status(500).json({ error: "Error fetching certificates" });
//   }
// });
router.get("/verify-token", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
  
    if (!token) return res.json({ valid: false });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.json({ valid: true, instituteId: decoded.id });
    } catch (error) {
      res.json({ valid: false });
    }
  });
module.exports = router;
