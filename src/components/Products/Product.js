import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
        <h3 className="btn-text">ADD TO CART</h3>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
