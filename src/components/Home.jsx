import React from "react";
import image from '../assets/images/Food.png';


const Home = () => {
  return (
    <>

      <section className="home" id="home">
        <div className="content">
          <h3>
            fresh <span>food for  </span> a start
            
          </h3>
          <p>
          "Indian Accent’s inventive Indian cuisine complements the flavours and traditions of India with global ingredients and techniques.""
           
          </p>
          <a href="#" className="btn">
            get yours now
          </a>
        </div>
        <div className="image-container">
        <img className="rotate" src={image} alt="Fresh Food" />
        </div>
      </section>
    </>
  );
};
export default Home;