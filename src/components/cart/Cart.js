import React from "react";
import Product from "../Products/Product";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);
  let i = [];
  let count = 0;
  for (const product of cart) {
    count += 1;

    if (count == 5) {
      alert("You cannot add any more than 4");
    } else {
      i.push(product.name);
    }
  }

  console.log(i);
  let a = "";

  function chooseRandom() {
    const random = Math.floor(Math.random() * i.length);
    console.log(random, i[random]);
    if (i[random] != undefined) {
      document.getElementById("show").value = i[random];
    }
  }

  return (
    <div className="cart">
      <h2>Selected Games</h2>
      {cart.map((product) => (
        <div class="cart-select">
          <img src={product.image} alt="" />
          <p class="cart-select-text">{product.name}</p>
        </div>
      ))}

      <button onClick={chooseRandom}>Choose 1 for me</button>

      <div>
        <input id="show" />
      </div>
      {/* <button onClick={reset}>Choose again</button> */}
    </div>
  );
};

export default Cart;
