const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authStudent = require('./routes/authStudent');
const authInstitute = require("./routes/authInstitute");


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Use the student auth routes
app.use("/institute", authInstitute);
app.use('/student', authStudent);
// app.use('/institute', authInstitute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
