import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import "./ProductListingPage.css";
import Card from "./Card";
import Header from "./Header";

function CartPage() {
  const Cart = useContext(CartContext);

  return (
    <>
      <Header />
      <h1>Cart</h1>
      {Cart && Cart.items.map((item, id) => <Card item={item} key={id} />)}
    </>
  );
}

export default CartPage;
