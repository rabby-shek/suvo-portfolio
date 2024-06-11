import React from "react";
import Docrx1 from '../../assets/images/docrx/dashboard-section.PNG';
import GPT3 from "../../assets/images/gpt3/hero-section.PNG";
import HangMan from "../../assets/images/hang-man-game/hangman-game.PNG";
import IMS from "../../assets/images/ims/dashboard.PNG";
import Restaurant from "../../assets/images/restaurant-landing-page/hero-section.PNG";
import SmartHotel from "../../assets/images/smart-hotel/home-page.PNG";
import WeatherApp from "../../assets/images/weatherapp/weatherapp1.PNG";
import Portfolio from "../../assets/images/reactportfolio/home.PNG";
import CarRentalService from "../../assets/images/car-rental-service.PNG";
import AnalogWatch from "../../assets/images/analog-watch-design.PNG";
import TodoApp from "../../assets/images/todo-app.PNG";
import DigitalClock from "../../assets/images/digital-clock.PNG";
import TikTakToe from "../../assets/images/tik-tac-toe.PNG";
import transition from "../../transition";
const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "web",
      imgSrc: Docrx1,
      description: "Prescription, Medicine and schedule management.",
      name: "DocRx",
      technology : ["HTML", "CSS", "JavaScript","JQuery","PHP","MySQL"],
      link: "https://smartprescription.hishabkitab.com/"
    },
    {
      id: 2,
      category: "web",
      imgSrc: GPT3,
      description: "Chat GPT Landing page",
      name: "GPT-3",
      technology : ["HTML", "CSS", "ReactJS",],
      link: "https://rabby-shek.github.io/gpt/"
    },
    {
      id: 3,
      category: "web",
      imgSrc: HangMan,
      description: "Web Word guessing game.",
      name: "Hang Man Game",
      technology : ["HTML", "CSS","BootStrap", "JavaScript"],
      link: "https://rabby-shek.github.io/hangman_game/"
    },
    {
      id: 4,
      category: "app",
      imgSrc: "https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-cute-yellow-bee-cartoon-illustration-png-image_6653635.png",
      description: "Bill payment app for tenants.",
      name: "BEE PAY",
      technology : ["JAVA", "Firebase"]
    },
    {
      id: 5,
      category: "web",
      imgSrc: IMS,
      description: "Institution Management System",
      name: "IMS",
      technology : ["HTML", "CSS","ReactJs","Styled-Component","Framer-motion"]
    },
    {
      id: 6,
      category: "web",
      imgSrc: Restaurant,
      description: "Restaurant Landing page",
      name: "Restaurant Landing page",
      technology : ["HTML", "CSS","JavaScript", "AOS"],
      link: "https://rabby-shek.github.io/quality/#home"
    },
    {
      id: 7,
      category: "web",
      imgSrc: SmartHotel,
      description: "Hotel management system",
      name: "Smart Hotel",
      technology : ["HTML", "CSS","JavaScript", "JQuery","CodeIgniter4"],
      link: "https://smarthotel.hishabkitab.com/"
    },
    {
      id: 8,
      category: "web",
      imgSrc: WeatherApp,
      description: "ReactJS Weather Application",
      name: "Weather App",
      technology : ["ReactJS","Bootstrap","CSS","API"],
      link: "https://rabby-shek.github.io/react-weather-app/"
    },
    {
      id: 9,
      category: "web",
      imgSrc: Portfolio,
      description: "ReactJS Portfolio",
      name: "Portfolio",
      technology : ["ReactJS","Bootstrap","CSS"],
      link: "https://rabby-shek.github.io/reactprotfolio/"
    },
    {
      id: 10,
      category: "web",
      imgSrc: CarRentalService,
      description: "Car rental Service with invoice.",
      name: "Car rental service",
      technology : ["ReactJS","Bootstrap","CSS", "API", "Context API"],
      link: "https://rabby-shek.github.io/car-rental-invoice-service/"
    },
    {
      id: 11,
      category: "web",
      imgSrc: AnalogWatch,
      description: "JavaScript Analog Watch Project.",
      name: "Analog Watch",
      technology : ["HTML", "CSS", "JavaScript"],
      link: "https://rabby-shek.github.io/analog-watch-design/"
    },
    {
      id: 12,
      category: "web",
      imgSrc: TodoApp,
      description: "Todo App",
      name: "Todo App",
      technology : ["ReactJS"],
      link: "https://rabby-shek.github.io/todoapp/"
    },
    {
      id: 13,
      category: "web",
      imgSrc: DigitalClock,
      description: "Digital Clock",
      name: "Digital Clock",
      technology : ["HTML", "CSS", "JS"],
      link: "https://rabby-shek.github.io/digital_clock/"
    },
    {
      id: 14,
      category: "web",
      imgSrc: TikTakToe,
      description: "tic tac toe",
      name: "tic tac toe",
      technology : ["ReactJS","CSS"],
      link: "https://rabby-shek.github.io/tiktactoe/"
    },
  ];

  const renderProjects = (category) => {
    return projects
      .filter((project) => category === "all" || project.category === category)
      .map((project) => (
        <div key={project.id} className="col-lg-4 col-md-4 col-sm-6 mb-4" data-aos="flip-up">
          <div className="card h-100">
            <img src={project.imgSrc} className="card-img-top" alt={project.description} height={200} />
            <div className="card-body">
                <div className="fw-bold">{project.name}</div>
                <div>{project.description}</div>
                <div>{project.technology.join(", ")}</div>
                <a href={project.link} target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <section className="projects-container py-5">
      <div className="container mt-5">
        <ul className="nav nav-pills mb-3 d-flex align-items-center justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="all-tab"
              data-bs-toggle="pill"
              data-bs-target="#all"
              type="button"
              role="tab"
              aria-controls="all"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="web-tab"
              data-bs-toggle="pill"
              data-bs-target="#web"
              type="button"
              role="tab"
              aria-controls="web"
              aria-selected="false"
            >
              Web
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="app-tab"
              data-bs-toggle="pill"
              data-bs-target="#app"
              type="button"
              role="tab"
              aria-controls="app"
              aria-selected="false"
            >
              App
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
            <div className="row justify-content-center">
              {renderProjects("all")}
            </div>
          </div>
          <div className="tab-pane fade" id="web" role="tabpanel" aria-labelledby="web-tab">
            <div className="row justify-content-center">
              {renderProjects("web")}
            </div>
          </div>
          <div className="tab-pane fade" id="app" role="tabpanel" aria-labelledby="app-tab">
            <div className="row justify-content-center">
              {renderProjects("app")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default transition(Projects);
