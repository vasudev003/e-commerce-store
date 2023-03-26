import React, { useState } from "react";
import "./cart.css";

function Card({ item }) {
  const [itemcount, setItemcount] = useState(1);

  return (
    <div className="cart_item">
      <img src={item.image} alt="" className="item_img" />
      <h3 className="item_heading">{item.title}</h3>
      <button onClick={() => setItemcount(itemcount + 1)}>+</button>
      <p className="">{itemcount}</p>
      <button onClick={() => setItemcount(itemcount - 1)}>-</button>
      <p className="item_price">{item.price}</p>
    </div>
  );
}

export default Card;
