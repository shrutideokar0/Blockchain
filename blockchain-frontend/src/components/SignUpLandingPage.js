import React from 'react';
import { Link } from 'react-router-dom';
import './LoginLandingPage.css';


const SignUpLandingPage = () => {
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
            <h2><span>Create Your Certify Account</span> </h2>
            <h1>Join as a Student or Institution</h1>
            <p>Sign up to issue, manage, or verify blockchain-secured academic credentials.</p>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-md-4 mb-3">
              <Link to="/institute/signup" className="btn btn-institution btn-block py-3">
                Sign up as Institution
              </Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link to="/student/signup" className="btn btn-student btn-block py-3">
              Sign up as Student
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

export default SignUpLandingPage;
