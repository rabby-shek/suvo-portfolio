import React from "react";
import Docrx1 from '../../assets/images/docrx/dashboard-section.PNG';

const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "web",
      imgSrc: Docrx1,
      description: "Prescription, Medicine and schedule management.",
      name: "DocRx"
    },
    {
      id: 2,
      category: "app",
      imgSrc: "https://via.placeholder.com/150",
      description: "App Project 1 Description",
    },
    {
      id: 3,
      category: "web",
      imgSrc: "https://via.placeholder.com/150",
      description: "Web Project 2 Description",
    },
    {
      id: 4,
      category: "app",
      imgSrc: "https://via.placeholder.com/150",
      description: "App Project 2 Description",
    },
    {
      id: 5,
      category: "web",
      imgSrc: "https://via.placeholder.com/150",
      description: "Web Project 3 Description",
    },
    {
      id: 6,
      category: "app",
      imgSrc: "https://via.placeholder.com/150",
      description: "App Project 3 Description",
    },
    // Add more projects as needed
  ];

  const renderProjects = (category) => {
    return projects
      .filter((project) => category === "all" || project.category === category)
      .map((project) => (
        <div key={project.id} className="col-lg-4 col-md-4 col-sm-6 mb-4" data-aos="flip-up">
          <div className="card h-100">
            <img src={project.imgSrc} className="card-img-top" alt={project.description} />
            <div className="card-body">
                <p>{project.name}</p>
              <p className="card-text">{project.description}</p>
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

export default Projects;
