import React from 'react';
import { Link } from 'react-router-dom';
import './LoginLandingPage.css';


const LoginLandingPage = () => {
  return (
    <>
      {/* <div className="hero_area sub_page">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src={heroBg} alt="Hero background" />
          </div>
        </div>
      </div> */}

      {/* Landing Buttons */}
      <section className="about_section layout_padding">
        <div className="container text-center">
          <div className="heading_container heading_center">
            <h2 ><span>Access Your Certify Portal</span></h2>
            <h1>Secure <span>Login</span> for Students, Institutions, and Verifiers</h1>
            <p>Log in to manage credentials, verify certificates, or access academic records.</p>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-md-4 mb-3">
              <Link to="/institute/login" className="btn btn-institution btn-block py-3">
                Login as Institution
              </Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link to="/student/login" className="btn btn-student btn-block py-3">
                Login as Student
              </Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link to="/verify" className="btn btn-verify btn-block py-3">
                Verify a Certificate
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default LoginLandingPage;
