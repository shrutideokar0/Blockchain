import React, { useState, useEffect } from "react";
import axios from "../api";
import "./InstituteDashboard.css"
;const InstituteDashboard = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    degree: "",
    date: "",
    signature: null,
  });

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/institute/login";
        return;
      }

      const response = await axios.get("/institute/certificates", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCertificates(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching certificates:", error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/institute/login";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, signature: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/institute/login";
      return;
    }

    const data = new FormData();
    data.append("studentName", formData.studentName);
    data.append("studentId", formData.studentId);
    data.append("degree", formData.degree);
    data.append("date", formData.date);
    data.append("signature", formData.signature);

    try {
      await axios.post("/institute/issue-certificate", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Certificate issued successfully!");
      setFormData({
        studentName: "",
        studentId: "",
        degree: "",
        date: "",
        signature: null,
      });
      fetchCertificates();
    } catch (error) {
      console.error("Error issuing certificate:", error);
      alert("Failed to issue certificate.");
    }
  };

  return (
    <div className="container-fluid custom-dashboard-bg text-white min-vh-100 py-5">
      <div className="container">
        {/* Navbar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-white">Institute Dashboard</h2>
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* Form Card */}
        <div className="card shadow-lg p-4 mb-5 bg-white text-dark rounded-4">
          <h4 className="text-primary mb-4">Issue New Certificate</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter student full name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Student ID</label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Student unique ID"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Degree / Course</label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="e.g., B.Sc Computer Science"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Date of Issue</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Upload Signature</label>
                <input
                  type="file"
                  name="signature"
                  onChange={handleFileChange}
                  className="form-control"
                  accept=".png,.jpg,.jpeg"
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary w-100">
                  Issue Certificate
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Certificates Table Card */}
        <div className="card shadow-lg p-4 bg-white text-dark rounded-4">
          <h4 className="text-primary mb-3">Issued Certificates</h4>
          {loading ? (
            <div className="text-center my-4">
              <div className="spinner-border text-primary" role="status" />
            </div>
          ) : certificates.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Course</th>
                    <th>Student Name</th>
                    <th>Status</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {certificates.map((cert) => (
                    <tr key={cert.id}>
                      <td>{cert.course || cert.degree}</td>
                      <td>{cert.studentName}</td>
                      <td>
                        <span
                          className={`badge px-3 py-2 ${
                            cert.status === "Verified"
                              ? "bg-success"
                              : "bg-warning text-dark"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </td>
                      <td>
                        <a
                          href={`https://ipfs.io/ipfs/${cert.ipfsHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary"
                        >
                          View Certificate
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-muted">No certificates issued yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;
