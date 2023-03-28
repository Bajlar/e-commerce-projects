import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  // console.log(props.cart); option 1:
  // const {cart} = props; option 2:
  // console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;
  for(const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = totalPrice * 7 / 100;
  const grandtotal = totalPrice + totalShipping + tax;

  return (
    <div className='cart'>
      <h6 className='order-summary'>Order Summary</h6>
      <p>Selected Items: {cart.length}</p>
      <p>total Price: ${totalPrice}</p>
      <p>total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Grand total: ${grandtotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;