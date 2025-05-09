import React from 'react';
import blockchain from '../images/blockchain-based-digital-certificate-Photoroom.jpg';
const slides = [
  {
    id: 1,
    img: blockchain,
    text: 'Certify leverages the power of blockchain to deliver a reliable platform empowering institutions to issue blockchain-secured certificates with integrity and trust.'
  },
  {
    id: 2,
    img: blockchain,
    text: 'Certify leverages the power of blockchain to deliver a reliable platform empowering institutions to issue blockchain-secured certificates with integrity and trust.'
  },
  {
    id: 3,
    img: blockchain,
    text: 'Certify leverages the power of blockchain to deliver a reliable platform empowering institutions to issue blockchain-secured certificates with integrity and trust.'
  }
];

const Slider = () => {
  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={slide.id}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>Certify</h1>
                      <p>{slide.text}</p>
                      <div className="btn-box">
                        <a href="about.html" className="btn1">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={slide.img} alt={`Slide ${slide.id}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ol className="carousel-indicators">
          {slides.map((_, index) => (
            <li
              key={index}
              data-target="#customCarousel1"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Slider;
