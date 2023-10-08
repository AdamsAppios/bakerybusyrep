// ShoppingCart.js
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}{' '}
            <button onClick={() => removeFromCart(item)}>Remove</button>
            <button onClick={() => incrementQuantity(item)}>+</button>
            <button onClick={() => decrementQuantity(item)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;