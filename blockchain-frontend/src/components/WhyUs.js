import React from 'react';
import img1 from '../images/undraw_secure-server_lz9x.png';
import img2 from '../images/flat-icon-private-blockchain-set-three-purple-blue-cubes-abstract-digital-technology-concept-flat-icon-private-blockchain-364009039.webp';
import img3 from '../images/undraw_world_bdnk.png';
const services = [
  {
    id: 1,
    title: 'Secure & Verifiable',
    text: 'Certificates are protected by blockchain, ensuring authenticity and eliminating forgery.',
    img: img1,
    link: null
  },
  {
    id: 2,
    title: 'Immutable Records',
    text: 'Once issued, certificates cannot be altered or tampered with, ensuring lifelong credibility.',
    img: img2,
    link: null
  },
  {
    id: 3,
    title: 'Global Accessibility',
    text: 'Students, employers, and institutions worldwide can access and verify certificates anytime.',
    img: img3,
    link: ''
  }
];

const Services = () => {
  return (
    <section className="service_section layout_padding">
      <div className="service_container">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose <span>CertifyChain?</span>
            </h2>
          </div>
          <div className="row">
            {services.map(service => (
              <div className="col-md-4" key={service.id}>
                <div className="box">
                  <div className="img-box">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <div className="detail-box">
                    <h5>{service.title}</h5>
                    <p>{service.text}</p>
                    {service.link && <a href={service.link}>Read More</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="btn-box">
            <a href="#">View All</a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
