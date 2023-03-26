import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="navigations">
        <Link to="/"> Home </Link>
        <Link to="/cart"> Cart </Link>
      </div>
    </header>
  );
}

export default Header;
