import { useState } from "react";

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    const isItemInCart = cartItems?.find(item => item.node.id === product.node.id)

    if(isItemInCart) {
    } else {
      const newCartItems = [{ ...product, quantity: 1 }, ...cartItems];
      setCartItems(newCartItems);
    }
  };

  return {
    cartItems,
    setCartItems,
    addToCart,
  };
}
