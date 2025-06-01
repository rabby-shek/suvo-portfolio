import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
  const navigate = useNavigate();
  const navLinks = [
    {
      id: 1,
      title: "Home",
      path: "/suvo-portfolio",
    },
    // {
    //   id: 3,
    //   title: "Resume",
    //   path: "/resume",
    // },
    {
      id: 4,
      title: "Projects",
      path: "/projects",
    },
    {
      id: 5,
      title: "Blogs",
      path: "/blogs",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSecondaryNavbar(true);
      } else {
        setShowSecondaryNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg nav-top" id="home">
        <div className="container-fluid">
          <NavLink
            to="/suvo-portfolio"
            className="navbar-brand"
          >
            Suvo
          </NavLink>
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
              {navLinks.map((item) => {
                return (
                  <li key={item.id} className="nav-item">
                    <NavLink className="nav-link" to={item.path}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
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
            <a className="navbar-brand" href="#home">
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
                {navLinks.map((item) => {
                  return (
                    <li key={item.id} className="nav-item">
                      <NavLink className="nav-link" to={item.path}>
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
