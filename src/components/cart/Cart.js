import React from "react";
import Product from "../Products/Product";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);

  let i = "";

  for (const product of cart) {
    // i = i + <br /> + product.name;
    i.map(product.name);
  }

  return (
    <div className="cart">
      <h2>Selected Clothes</h2>
      {cart.map((product) => (
        <div className="">
          <img src={product.img} alt="" />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

// let j = "";
// for (let a = 0; a < i.length; a++) {
//   j = i[a];
//   <br />;
// }
// console.log(j);
