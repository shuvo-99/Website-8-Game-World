import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  const { product, handleAddToCart } = props;
  const { name, image, price } = product;
  return (
    <div className="product">
      <img src={image} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: {price} tk</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <h3>ADD TO CART</h3>
      </button>
    </div>
  );
};

export default Product;
