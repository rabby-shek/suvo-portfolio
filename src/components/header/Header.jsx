import React, { useState, useEffect } from 'react';
import BrandLogo from '../../assets/images/brand-logo.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Header = () => {
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSecondaryNavbar(true);
      } else {
        setShowSecondaryNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg nav-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src={BrandLogo} alt="brand-logo" /> */}
            Suvo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showSecondaryNavbar && (
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary fixed-top nav-shadow"
          data-aos="fade-down"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {/* <img src={BrandLogo} alt="brand-logo" /> */}
              Suvo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavSecondary"
              aria-controls="navbarNavSecondary"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavSecondary">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#resume">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
