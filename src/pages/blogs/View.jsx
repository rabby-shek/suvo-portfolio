import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { blogsData } from "../../data/blog";

const View = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const blog = blogsData.find((blog) => blog.id === parseInt(id)); // Find the blog post based on the id

  // Check if the blog post exists
  if (!blog) {
    return <div>Blog post not found!</div>;
  }
  return (
    <section className="blog-single">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-8 m-15px-tb">
            <article className="article">
              <div className="article-img">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="article-title">
                <h6>
                  <a href="#">{blog.category}</a>
                </h6>
                <h2>{blog.title}</h2>
                <div className="media">
                  <div className="media-body">
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
              <div className="article-content">
                <p>{blog.content}</p>
                <h4>{blog.exampleTitle ? blog.exampleTitle : ""}</h4>
                <div className="code">
                  <div
                    className="code"
                    dangerouslySetInnerHTML={{
                      __html: blog.exampleCode ? blog.exampleCode : "",
                    }}
                  ></div>
                </div>
              </div>
              <div className="nav tag-cloud">
                {blog.tags.map((tag, index) => {
                  return <a href="#" key={index}>{tag}</a>;
                })}
              </div>
            </article>
          </div>
          <div className="col-lg-4 m-15px-tb blog-aside">
            {/* Latest Post */}
            <div className="widget widget-latest-post">
              <div className="widget-title">
                <h3>Latest Post</h3>
              </div>
              <div className="widget-body">
              {blogsData
                  .filter((latestBlog) => latestBlog.id !== parseInt(id)) // Exclude the current blog post
                  .map((latestBlog) => (
                    <div key={latestBlog.id} className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <h5>
                            <NavLink to={`/blog/${latestBlog.id}`}>
                              {latestBlog.title}
                            </NavLink>
                          </h5>
                        </div>
                        <div className="lpa-meta">
                          <span className="date">{latestBlog.date}</span>
                        </div>
                      </div>
                      <div className="lpa-right">
                        <NavLink to={`/blog/${latestBlog.id}`}>
                          <img src={latestBlog.image} alt={latestBlog.title} />
                        </NavLink>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* End Latest Post */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default View;
