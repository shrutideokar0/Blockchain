import React, { useState } from "react";
import axios from "../api";
import "./StudentSignup.css";
import imgsi from "../images/images.png";

const StudentLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/student/login", formData);
      alert("Login Successful!");

      // Save token in localStorage
      localStorage.setItem("token", response.data.token);
      console.log("Token Stored:", localStorage.getItem("token")); // 🔥 Debugging: Check token storage

      // localStorage.setItem("role", response.data.student.role);
      // localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", "student");

      // Redirect to student dashboard
      window.location.href = "/student/dashboard";
    } catch (error) {
      alert(error.response.data || "Login Failed");
    }
  };

  return (
    <div className="signup-page d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="signup-container d-flex flex-lg-row flex-column shadow rounded overflow-hidden bg-white">
        
        {/* Left: Form */}
        <div className="p-5 flex-fill d-flex flex-column justify-content-center">
          <h2 className="mb-3 fw-bold text-primary">Student Login</h2>
          <p className="text-muted mb-4">Log in to securely manage your academic credentials.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control rounded-pill" 
                name="email" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control rounded-pill" 
                name="password" 
                onChange={handleChange} 
                required 
              />
            </div>
            <button type="submit" className="btn bg-primary w-100 rounded-pill">Login</button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-3 text-center">
            <a href=" " className="text-muted">Forgot Password?</a>
          </div>
          
          {/* Sign Up Section */}
          <div className="mt-4 text-center">
            <p className="text-muted">Don't have an account? <a href="/student/signup" >Sign Up</a></p>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="signup-illustration custom-dark-bg d-flex flex-column justify-content-center align-items-center text-white p-4">
          <img 
            src={imgsi} 
            alt="Blockchain Education" 
            className="img-fluid mb-3" 
            style={{ maxWidth: "350px" }} 
          />
          <h4 className="text-center">Join thousands of students using Certify</h4>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
