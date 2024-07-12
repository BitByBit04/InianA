import React from "react";
import AboutImg from "../assets/images/dess.jpeg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our Food Unique?</h3>
            <p>
            The first Indian Accent opened in New Delhi in 2009, before moving to its current location at The Lodhi. The restaurant received significant acclaim for its unconventional and innovative approach to contemporary Indian food. In 2016, it opened an outpost in New York to critical and commercial acclaim.            </p>
            <p>
            This mix makes our cuisine stand out and ensures a delightful dining experience.
            This diversity influences flavor profiles and nutritional compositions, making each cuisine distinctive.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;