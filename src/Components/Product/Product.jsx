import React from 'react';

import './Product.css'

import productImage1 from "../../Images/product-image1.jpeg"
import productImage2 from "../../Images/product-image2.jpeg"
import productImage3 from "../../Images/product-image3.jpeg"
import productImage4 from "../../Images/product-image4.jpeg"
import productImage5 from "../../Images/product-image5.jpeg"
import productImage6 from "../../Images/product-image6.jpeg"

import ProductCard from '../Product-card/ProductCard';

const productImages = [
  {
    id: 1,
    img: productImage1,
    name: "METEOR 350",
    price: "Rs.2.01 - 2.19 Lakh",
  },
  {
    id: 2,
    img: productImage2,
    name: "CONTINENTAL GT 650",
    price: "Rs.3.06 - 3.32 Lakh",
  },
  {
    id: 3,
    img: productImage3,
    name: "BULLETE 350",
    price: "Rs.1.90 - 2.21 Lakh",
  },
  {
    id: 4,
    img: productImage4,
    name: "CLASSIC 350",
    price: "Rs.1.55 - 1.63 Lakh",
  },
  {
    id: 5,
    img: productImage5,
    name: "SCRAM 411",
    price: "Rs.2.03 - 2.09 Lakh",
  },
  {
    id: 6,
    img: productImage6,
    name: "SHOTGUN 650",
    price: "Rs3.25 Lakh"
  },
];
function Product() {
  return (
    <div className="product__container" id="Products">
      <h1 className="product__heading">
        <span className="product__heading__first">M</span>
        <span className="product__heading__second">otorcycles</span>
      </h1>
      <div className="product__list__container">
        {productImages.map((product) => {
          return (
            <ProductCard key={product.id} id={product.id} image={product.img} name={product.name} price={product.price}/>
          );
        })}
      </div>
    </div>
  );
}

export default Product