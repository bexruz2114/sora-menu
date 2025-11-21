import React from "react";
import "./Footer.css";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Sora Café</h3>

        <div className="footer-icons">
          <a
            href="https://instagram.com/sora_cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://t.me/sora_cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link telegram"
          >
            <FaTelegramPlane />
          </a>
        </div>

        <p className="footer-text">
          © 2025 Sora Café. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
