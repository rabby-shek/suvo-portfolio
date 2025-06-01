import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { blogsData } from "../../data/blog";
import transition from "../../transition";
const Blogs = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blog/view/${id}`);
  };

  return (
    <section className="blog-container" id="blog">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-12 intro-text">
            <div className="title">Blog Posts</div>
          </div>
        </div>
        <div className="row gy-4">
          {blogsData.map((blog) => (
            <div key={blog.id} className="col-sm-6" data-aos={blog.fade}>
              <div className="blog-post d-flex shadow-on-hover h-100">
                <img src={blog.image} alt="blogs" />
                <div className="blog-post-content p-4">
                  <p>Posted: {blog.date}</p>
                  <h4>
                    <NavLink to={`/blog/view/${blog.id}`}>{blog.title}</NavLink>
                  </h4>
                  <p>{blog.content.slice(0, 100)}</p>
                  <button
                    className="view-btn"
                    onClick={() => handleReadMore(blog.id)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default transition(Blogs);
