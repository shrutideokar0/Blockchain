import React from 'react';
import imgw1 from '../images/w1.png';
import imgw2 from '../images/w2.png';
import imgw3 from '../images/w3.png';
import imgw4 from '../images/w4.png';

const services = [
  {
    id: 1,
    title: 'Digital Credential Issuance',
    text: 'Institutions can issue tamper-proof digital certificates that are stored securely on the blockchain.',
    img: imgw1
  },
  {
    id: 2,
    title: 'Instant Credential Verification',
    text: 'Anyone can verify the authenticity of a certificate in seconds using a unique hash or QR code — no third-party needed.',
    img: imgw2
  },
  {
    id: 3,
    title: 'Decentralized Record Storage',
    text: 'We leverage IPFS and smart contracts to ensure that all data is securely stored and accessible only to authorized users.',
    img: imgw3
  },
  {
    id: 4,
    title: 'Dashboard for Institutions & Users',
    text: 'A sleek interface to manage issued credentials, view analytics, and interact with blockchain records.',
    img: imgw4
  }
];

const WhyUs = () => {
  return (
    <section className="why_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            <span>Services</span>
          </h2>
        </div>
        <div className="why_container">
          {services.map(service => (
            <div className="box" key={service.id}>
              <div className="img-box">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="detail-box">
                <h5>{service.title}</h5>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
