import React from "react";
import Button from "./Button";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <p className="logo-name">
              <Link to="/">
                <i>Filtro</i>
              </Link>
            </p>
            <ul className="nav-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/explore">Explore us</Link>
              </li>
              <li>
                <Link to="/brands">Brands</Link>
              </li>
              <li>
                <Link to="/contacts">Contact us</Link>
              </li>
            </ul>
            <div className="nav-btns">
              <Button>Sign up/Login</Button>
              <Button>Get the App</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
