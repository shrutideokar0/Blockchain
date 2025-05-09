import React, { useState } from "react";
import axios from "../api";
import "./InstituteSignup.css"; // Add this file for custom styling
import imgsi from "../images/education-and-blockchains-banner.jpg"; 

const InstituteSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    instituteId: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/institute/signup", formData);
      alert("Institute Registered Successfully!");
    } catch (error) {
      alert(error.response?.data || "Error registering");
    }
  };

  return (
    <div className="signup-page d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="signup-container d-flex flex-lg-row flex-column shadow rounded overflow-hidden bg-white">
        {/* Left form section */}
        <div className="p-4 flex-fill">
          <h2 className="mb-2 fw-bold text-primary">Register Your Institute</h2>
          <p className="text-muted">Start issuing verifiable credentials securely.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Institute Name</label>
              <input type="text" className="form-control rounded-pill" name="name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control rounded-pill" name="email" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">University Affiliation</label>
              <input type="text" className="form-control rounded-pill" name="university" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Institute ID</label>
              <input type="text" className="form-control rounded-pill" name="instituteId" onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input type="password" className="form-control rounded-pill" name="password" onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-pill">Sign Up</button>
          </form>
        </div>

        {/* Right image/illustration section */}
        <div
  className="d-none d-lg-block bg-image"
  style={{
    flex: 1.2, // Increased from "flex-fill" or flex: 1
    backgroundImage: `url(${imgsi})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
></div>
      </div>
    </div>
  );
};

export default InstituteSignup;
