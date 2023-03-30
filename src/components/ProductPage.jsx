import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import Header from "./Header";
import "./ProductPage.css";

function ProductPage() {
  const Cart = useContext(CartContext);

  return (
    <>
      <Header />
      <img src={Cart.individual.image} className="individual_image" alt="" />
      <h2>{Cart.individual.title}</h2>
      <p>{Cart.individual.description}</p>
      <p>Price: ${Cart.individual.price}</p>
    </>
  );
}

export default ProductPage;
