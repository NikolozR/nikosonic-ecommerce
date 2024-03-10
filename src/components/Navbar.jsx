import React from "react";
import Button from "./Button";
import "../styles/Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
          <p className="logo-name"><i>Filtro</i></p>
          <ul className="nav-ul">
            <li>Home</li>
            <li>Explore us</li>
            <li>Brands</li>
            <li>Contact us</li>
          </ul>
          <div className="nav-btns">
            <Button text="Sign up/Login" />
            <Button text="Get the App" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
