import React, { useState } from "react";
import "./VerifyCertificate.css"; // Optional: for additional custom styles

const VerifyCertificate = () => {
  const [studentId, setStudentId] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated result (replace with actual API call)
    const mockResult = {
      name: "Shruti Deokar",
      degree: "B.Tech Computer Engineering",
      ipfsLink: "https://ipfs.io/ipfs/yourfilehash",
      hash: "0x123456abcdef",
      status: "valid"
    };

    setResult(mockResult);
  };

  return (
    <div className="sub_page">
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
               <span>Verify Certificate</span>
            </h2>
            <p>Enter Credential ID to check certificate validity and view details.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="verify-box p-4 rounded" style={{ backgroundColor: "#f8f9fa" }}>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="studentID"><strong>Enter Credential ID:</strong></label>
                    <input
                      type="text"
                      className="form-control"
                      id="studentID"
                      placeholder="e.g. 2024CS101"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">Verify</button>
                </form>

                {result && (
                  <div className="mt-4" id="resultBox">
                    <h5>Verification Result:</h5>
                    <ul className="list-group">
                      <li className="list-group-item"><strong>Name:</strong> {result.name}</li>
                      <li className="list-group-item"><strong>Degree:</strong> {result.degree}</li>
                      <li className="list-group-item">
                        <strong>IPFS Link:</strong> <a href={result.ipfsLink} target="_blank" rel="noopener noreferrer">View Certificate</a>
                      </li>
                      <li className="list-group-item"><strong>Credential Hash:</strong> {result.hash}</li>
                      <li className="list-group-item">
                        <strong>Status:</strong>{" "}
                        <span className={result.status === "valid" ? "text-success font-weight-bold" : "text-danger font-weight-bold"}>
                          {result.status === "valid" ? "✅ Valid" : "❌ Not Found"}
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyCertificate;
