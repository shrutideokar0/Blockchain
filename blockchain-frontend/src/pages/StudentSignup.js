import React, { useState } from "react";
import axios from "../api";
import "./StudentSignup.css";
import imgsi from "../images/images.png";

const StudentSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    studentId: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/student/signup", formData);
      alert("Registered Successfully!");
    } catch (error) {
      alert(error.response?.data || "Error registering");
    }
  };

  return (
    <div className="signup-page d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="signup-container d-flex flex-lg-row flex-column shadow rounded overflow-hidden bg-white">
        
        {/* Left: Form */}
        <div className="p-5 flex-fill d-flex flex-column justify-content-center">
          <h2 className="mb-3 fw-bold text-primary">Create Your Certify Account</h2>
          <p className="text-muted mb-4">Sign up to securely manage your academic credentials.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control rounded-pill" name="name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control rounded-pill" name="email" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">University</label>
              <input type="text" className="form-control rounded-pill" name="university" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Student ID</label>
              <input type="text" className="form-control rounded-pill" name="studentId" onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input type="password" className="form-control rounded-pill" name="password" onChange={handleChange} required />
            </div>
            <button type="submit" className="btn bg-primary w-100 rounded-pill">Sign Up</button>
          </form>
        </div>

        {/* Right: Illustration */}
        <div className="signup-illustration custom-dark-bg d-flex flex-column justify-content-center align-items-center text-white p-4">
          <img src={imgsi} alt="Blockchain Education" className="img-fluid mb-3" style={{ maxWidth: "350px" }} />
          <h4 className="text-center">Join thousands of students using Certify</h4>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;
