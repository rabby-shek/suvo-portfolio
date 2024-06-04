import React from 'react';
import DeVPhoto from '../../assets/images/RESUME.jpg';

const HeroSection = () => {
  return (
    <section className='hero-container'>
      <div className="container">
      <div className="row align-items-center no-gutters">
        <div className="col-md-5 col-sm-6 text-start">
          <div className='hero-developer-title' data-aos="fade-down" data-aos-duration="600">JavaScript Developer.</div>
          <p className='hero-para'>I like to craft solid and scalable frontend products with great user experiences.</p>
          <div className="row hero-sub-content">
            <div className="col-6" data-aos="flip-left" data-aos-duration="600">Highly skilled at progressive enhancement, design systems & UI Engineering</div>
            <div className="col-6" data-aos="flip-right" data-aos-duration="600">Proven experience building successful products for clients.</div>
          </div>
        </div>
        <div className="col-md-7 col-sm-6 bg-photo" data-aos="fade-left" data-aos-duration="600">
          <div className='hero-image-container'>
           <div className='hero-bg-pattern'>
           <img src={DeVPhoto} alt="Developer" className="img-fluid" />
           </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default HeroSection;
