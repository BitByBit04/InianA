import React from "react";
import { blog } from "../Data";

const Blog = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>

        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="content">
                <a href="#" className="title">
                  {item.title}
                </a>
                <span>by {item.author} / {item.date}</span>
                <p>{item.description}</p>
                <a href="#" className="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
