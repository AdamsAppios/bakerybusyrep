// ShoppingCart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
