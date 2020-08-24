import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   const total = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    total = total + element.price;
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  const formatPrice = (number) => {
    const precision = number.toFixed(2);
    return Number(precision);
  };
  const tax = (total / 2).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);
  return (
    <div>
      <h2>Order Summary</h2>
      <h4>Items Orders: {cart.length}</h4>
      <h5>Sub-Total: {formatPrice(total)}</h5>
      <p>
        <small>Shipping: {shipping}</small>
      </p>
      <p>
        <small>Tax + VAT: {tax}</small>
      </p>

      <h3>Total: {grandTotal}</h3>
    </div>
  );
};

export default Cart;
