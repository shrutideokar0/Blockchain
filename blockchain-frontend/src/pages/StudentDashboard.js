import React, { useState, useEffect } from "react";
import axios from "../api";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
  
      if (!token || role !== "student") {
        console.error("Unauthorized Access - Redirecting");
        window.location.href = "/unauthorized";
        return;
      }
  
      try {
        const response = await axios.get("/student/certificates", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });        
        
        setCertificates(response.data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        alert("Access denied. Please login again.");
        localStorage.removeItem("token");
        window.location.href = "/student/login";
      } finally {
        setLoading(false);
      }
    };
  
    fetchCertificates();
  }, []);

  // 🔹 Handle File Upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    
    const formData = new FormData();
    formData.append("document", file);

    try {
      const response = await axios.post("/student/upload", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed.");
    }
  };

  // 🔹 Request Credential Issuance
  const requestCredential = async () => {
    try {
      const response = await axios.post("/student/request-credential", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      alert("Credential issuance requested!");
    } catch (error) {
      console.error("Error requesting credential:", error);
      alert("Request failed.");
    }
  };

  // 🔹 Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/student/login";
  };

  return (
    <div className="container mt-5">
      <h2>Welcome to Your Dashboard</h2>
      <button onClick={handleLogout} className="btn btn-danger mb-4">Logout</button>

      {/* 🔹 File Upload Section */}
      <div className="upload-container">
        <h4>Upload Documents for Verification</h4>
        <label className="upload-btn">
          Select File
          <input type="file" onChange={handleFileUpload} hidden />
        </label>
        {selectedFile && <p>Selected: {selectedFile.name}</p>}
      </div>

      <h4>Issued Certificates</h4>
      {loading ? (
        <p>Loading certificates...</p>
      ) : certificates.length > 0 ? (
        <div className="certificate-list">
          {certificates.map((cert) => (
            <div key={cert._id} className="certificate-card">
              <strong>{cert.course}</strong> - Issued by {cert.university}
              <br />
              <span className={`status-badge ${cert.approvalStatus === "approved" ? "approved" : "pending"}`}>
                {cert.approvalStatus === "approved" ? "✅ Approved" : "⏳ Pending"}
              </span>
              <br />
              <a href={`https://ipfs.io/ipfs/${cert.ipfsHash}`} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No certificates found.</p>
      )}

      {/* 🔹 Request Credential Button */}
      <button onClick={requestCredential} className="btn btn-primary mt-3">Request Credential Issuance</button>
    </div>
  );
};

export default StudentDashboard;
