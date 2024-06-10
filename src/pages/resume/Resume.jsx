import React from 'react'
import { NavLink } from 'react-router-dom';
import RESUME from '../../assets/images/MD Rabby Shek Suvo Resume.pdf';
const Resume = () => {
  return (
    <section className='resume-container'>
      <div className="container">
        <div className="row" id='row'>
        <div className='resume-download-btn'><a  href={RESUME} download >Download</a></div>
          <div className="col-lg-3 col-sm-6">
            <div className='personal-info'>
              <div className="email">rabbyshek1998@gmail.com</div>
              <div className="contanct">+8801724707680</div>
              <div className="address">Matual, Jatrabari, Dhaka</div>
            </div>
            <div className="technologies">
              <h4>Technologies</h4>
              <ul className='skill-list'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>php</li>
                <li>ReactJS</li>
                <li>Bootstrap</li>
                <li>Tailwind (Basic)</li>
                <li>JQuery</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-sm-6" id='details'>
            <div className="name">MD Rabby Shek Suvo</div>
            <p className='sub-title'>Frontend and Web Developer</p>
            <p className='objective'>Engineer valued for driving high-performance accessible web experiences. I design quality, user-friendly and scalable products regardless of stack. </p>
            <hr />
            <div className='education'>
              <h4>Education</h4>
              <div className="row">
              <div className="col-lg-8 col-sm-6">
                <div className="company-name">Sonargoan University</div>
                <div>BSC in CSE</div>
                <div className='mb-3'>CGPA : 3.50 out of 4.00</div>
              </div>
              <div className="col-lg-4 col-sm-6 text-end">January 2020 - January 2024</div>
            </div>
            </div>
            <div className='experience'>
            <h4>Experience</h4>
            <p>I’ve worked on a handful of web projects over the years, some of which were for the following organizations: </p>
           
            <div className="row">
              <div className="col-lg-8 col-sm-6">
                <div className="company-name fw-bold">AdovaSoft</div>
                <p className='fw-bold h6'>Junior Web Developer</p>
              </div>
              <div className="col-lg-4 col-sm-6 text-end">Oct 2021 - Present</div>
              <div className="col-lg-12 col-sm-12">
              <ul>
                  <li>Collaborated closely with seasoned developers to implement and maintain web applications.</li>
                  <li> Gained hands-on experience in HTML, CSS, and JavaScript under experienced mentorship.</li>
                  <li>Actively participated in the development lifecycle, including coding, debugging, testing, and deployment.</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-sm-6">
                <div className="company-name fw-bold">AdovaSoft</div>
                <p className='fw-bold h6'>Frontend Developer</p>
              </div>
              <div className="col-lg-4 col-sm-6 text-end">March 2021 - September 2021</div>
              <div className="col-lg-12 col-sm-12">
              <ul>
                  <li>Crafted immersive web experiences, prioritizing user-centric design principles.</li>
                  <li> Collaborated closely with cross-functional teams to deliver high-quality software solutions.</li>
                  <li>Demonstrated commitment to continuous learning and staying updated with industry trends.</li>
                </ul>
              </div>
            </div>
            <div className="row"><NavLink to="/projects" className="projects">Projects</NavLink></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Resume;
