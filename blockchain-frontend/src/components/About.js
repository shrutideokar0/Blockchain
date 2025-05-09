import React from 'react';
import img from '../images/blockchain-education-use-cases-and-applications-main-1600-removebg-preview.png'
const About = () => {
  return (
    <>
    <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            About <span>Us</span>
          </h2>
          <p>
            Empowering trust through technology
            <br />
            Revolutionizing the way academic and professional credentials are issued and verified.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img
                src={img}
                alt="About Certify"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h3>We Are Certify</h3>
              <p>
                There are countless challenges in verifying educational or professional records today—manual processes, forgery, and lack of a global standard. Certify is here to solve that.
                By harnessing the power of blockchain, we offer a tamper-proof and decentralized platform for issuing and validating digital credentials.
              </p>
              <p>
                Our mission is simple: to bring transparency and security to the world of digital credentials, one block at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
