import { Link } from "react-router-dom";
import "../styles/Footer.scss";

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
        </div>
        <div className="footer-footer">
            
        </div>
      </div>
    </footer>
  );
}

export default Footer;
