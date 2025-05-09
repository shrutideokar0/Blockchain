import React, { useState, useEffect } from "react";
import axios from "../api";
import "./InstituteLogin.css"; // Optional: for additional styling if needed
import img34 from '../images/education-and-blockchains-banner.jpg';
const InstituteLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const verifyToken = async () => {
      try {
        if (token) {
          const response = await axios.get("/institute/dashboard", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
          });
          

          if (response.data.valid) {
            window.location.href = "/institute/dashboard";
          }
        }
      } catch (error) {
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/institute/login", formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", "institute");
      window.location.href = "/institute/dashboard";
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-10 col-lg-8 col-xl-7 shadow-lg rounded-4 overflow-hidden d-flex p-0 flex-md-row flex-column">
          {/* Left form section */}
          <div className="p-4 flex-fill d-flex flex-column justify-content-between">
            <div>
              <h2 className="mb-2 fw-bold text-primary">Institute Login</h2>
              <p className="text-muted">Access your dashboard and manage certifications.</p>
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
                <div className="mb-2">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-end mb-3">
                  <a href=" " className="small text-decoration-none text-success">
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="btn btn-primary w-100 rounded-pill mb-3">
                  Login
                </button>
              </form>
            </div>
            <div className="text-center">
              <span className="text-muted">Don’t have an account?</span>
              <a href="/institute/signup" className="text-primary ms-2 text-decoration-none fw-semibold">
                Sign up
              </a>
            </div>
          </div>

          {/* Right image section */}
          <div className="d-none d-md-block col-md-6 p-0">
            <img
              src={img34}
              alt="Institute Login Illustration"
              className="img-fluid h-100 w-100 object-fit-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteLogin;
