import React from "react";
import { menu } from "../Data"; // Ensure the path to Data.js is correct

const dishes = [
  { id: 1, name: 'Sambhar Vada',  price: 500 },
  { id: 2, name: 'Crisp savoury Pancake', price: 400 },
  { id: 3, name: 'Triangular Pastry', price: 600 },
  { id: 4, name: 'Meat', price: 300 },
  { id: 5, name: 'Puri Sabji', price: 350 },
  { id: 6, name: 'Sushi',  price: 300 },
  { id: 7, name: 'Rolls',  price: 350 },
  { id: 8, name: 'Syrup Filled Rolls', price: 300 },
  { id: 9, name: 'Icecream',  price: 350 },
];

const combinedMenu = dishes.map((dish, index) => {
  const menuItem = menu.find(item => item.id === dish.id);
  return { ...dish, img: menuItem ? menuItem.img : 'default-image.jpg' };
});

const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <h2 style={{ color: 'rgba(245, 245, 245, 0.781)', fontSize: '20px', textAlign: 'center', fontFamily:'-moz-initial'}}>
          Our a la carte menu available for lunch and dinner features signature dishes which are a unique marriage of global ingredients and techniques with the flavours and traditions of India. The six course Chef's Tasting menu where each course is paired with a selection of wines from India and across the world, offers the complete dining experience of the restaurant.
        </h2>
        <br />
        <br />
       
        <div className="box-container">
          {combinedMenu.map((dish) => (
            <div className="box" key={dish.id}>
              <img src={dish.img} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <div className="price">
                ₹{dish.price.toFixed(2)}
              </div>
              <button className="btn">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;