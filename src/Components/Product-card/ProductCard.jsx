import React from "react";
import "./ProductCard.css";


function ProductCard(props) {
  return (

    <div className="ProductCard__container">
      <div className="ProductCard__imageContainer">
        <img src={props.image} alt="Bike" className="ProductCard__image" />
      </div>
        <div className="ProductCard__name">{props.name}</div>
        <div className="ProductCard__price">{props.price}</div>
        <button className="ProductCard__button">Buy Now</button>
    </div>
  );
}

export default ProductCard;
