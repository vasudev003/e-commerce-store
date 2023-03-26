import React, { useContext } from "react";
import "./ProductListingPage.css";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import Header from "./Header";

function ProductListingPage({ products, handleSearch }) {
  const Cart = useContext(CartContext);

  function individualProductPage(product) {
    Cart.setIndividual(product);
  }
  return (
    <div className="pro">
      <Header />
      <div className="search_input_div">
        <input
          type="text"
          placeholder="Search products"
          onChange={handleSearch}
          className="search_input"
        />
      </div>
      <div className="product_parent">
        {products.map((product) => (
          <div key={product.id} className="product_cart">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                className="product_img"
                alt=""
                onClick={() => individualProductPage(product)}
              ></img>
            </Link>
            <Link to={`/product/${product.id}`}>{product.title} </Link>
            <button
              onClick={() =>
                Cart.setItems([
                  ...Cart.items,
                  {
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  },
                ])
              }
            >
              add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
