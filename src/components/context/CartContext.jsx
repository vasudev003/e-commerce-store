import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [individual, setIndividual] = useState([]);
  return (
    <CartContext.Provider
      value={{ items, setItems, individual, setIndividual }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
