import React from "react";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png";


const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box animate__animated animate__zoomIn" key={index}>
              <img src={qouteImg} alt="quote" className="quote" />
              <p>{item.text}</p>
              <img src={item.img} className="user" alt="user" />
              <h3>{item.name}</h3>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star${i < item.rating ? "" : "-half-alt"}`}
                  ></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
