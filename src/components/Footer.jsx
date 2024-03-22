import React from "react";
// import Button from "./Button";
import "../styles/Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-body">
            <ul className="links" aria-label="Quick Links">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/explore"}>Explore Us</Link></li>
                <li><Link to={"/brands"}>Brands</Link></li>
                <li><Link to={"/contacts"}>Contact us</Link></li>
            </ul>
            {/* <ul className="legal" aria-label="Legal">
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
            </ul>
            <div className="newsletter">
                <h3>Join Our Newsletter</h3>
                <p>Be the first to know about our latest updates, exclusive offers, and more.</p>
                <form action="#" method="post">
                    <input type="email" name="email" id="email" placeholder="Enter your email" />
                    <Button text="Subscribe" />
                </form>
            </div> */}
        </div>
        <div className="footer-footer">
            
        </div>
      </div>
    </footer>
  );
}

export default Footer;
