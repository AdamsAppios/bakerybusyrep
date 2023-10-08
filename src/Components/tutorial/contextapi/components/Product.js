// Product.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity }; // Include the selected quantity with product
    addToCart(productWithQuantity);
  };

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
      <button onClick={handleAddToCart}>Add {quantity} to Cart</button>
    </div>
  );
};

export default Product;
