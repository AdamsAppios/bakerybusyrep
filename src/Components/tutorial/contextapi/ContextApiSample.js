// ContextApiSample.js
import React from 'react';

import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import User from './components/User';
import Theme from './components/Theme';
import { CartProvider } from './context/CartContext';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
];

function ContextApiSample() {
  return (
    <div>
    <UserProvider>
      <ThemeProvider>
        <div className="ContextApiSample">
          <h1>Context Api Sample</h1>
          <User />
          <Theme />
        </div>
      </ThemeProvider>
    </UserProvider>
    <CartProvider>
      <div className="App">
        <h1>Shopping App</h1>
        <div className="product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <ShoppingCart />
      </div>
    </CartProvider>
    </div>
  );
}

export default ContextApiSample;
