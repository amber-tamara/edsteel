import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <ul className="footer-list">
          <li>©E&D STEEL 2024</li>
          <li>
            <a href="https://example.com">
              <span>Terms & conditions</span>
            </a>
          </li>
          <li>
            <a href="https://example.com">Contact us</a>
          </li>
        </ul>
        <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
      </div>
      <p class="credit">
        Site by <a href="https://example.com">Amber Jansen</a>
      </p>
    </footer>
  );
};

export default Footer;
