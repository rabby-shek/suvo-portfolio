import React from "react";
import { blogsData } from "../../data/blog";
const Article = () => {
  return (
    <section className="blog-container" id="blog">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-12 intro-text">
            <div className="title">Blog Posts</div>
          </div>
        </div>
        <div className="row gy-4">
          {blogsData.map((blog) => {
            return (
              <div key={blog.id} className="col-sm-6" data-aos={blog.fade}>
                <div className="blog-post d-flex shadow-on-hover">
                  <img src={blog.image} alt="blogs" />
                  <div className="blog-post-content p-4">
                    <p>Posted : {blog.date}</p>
                    <h4>
                      <a href="#">{blog.title}</a>
                    </h4>
                    <p>{blog.content}</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Article;
