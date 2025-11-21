import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // 🔥 Scroll event — fon va soyani o‘zgartiradi
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* === Logo & Title === */}
        <div className="navbar-left">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img src={logo} alt="Sora Café Logo" className="navbar-logo" />
            <h1 className="navbar-title">Sora Café</h1>
          </Link>
        </div>

        {/* === Navigation Links === */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/salads"
              onClick={closeMenu}
              className={location.pathname === "/salads" ? "active" : ""}
            >
              🥗 Salatlar
            </Link>
          </li>
          <li>
            <Link
              to="/foods"
              onClick={closeMenu}
              className={location.pathname === "/foods" ? "active" : ""}
            >
              🍛 Somsa va Pide
            </Link>
          </li>
          <li>
            <Link
              to="/waffle"
              onClick={closeMenu}
              className={location.pathname === "/waffle" ? "active" : ""}
            >
              🧇 Vafli
            </Link>
          </li>
          <li>
            <Link
              to="/blinok"
              onClick={closeMenu}
              className={location.pathname === "/blinok" ? "active" : ""}
            >
              🥞 Blinok
            </Link>
          </li>
          <li>
            <Link
              to="/fruits"
              onClick={closeMenu}
              className={location.pathname === "/fruits" ? "active" : ""}
            >
              🍓 Pishiriq va Mevalar
            </Link>
          </li>
          <li>
            <Link
              to="/desserts"
              onClick={closeMenu}
              className={location.pathname === "/desserts" ? "active" : ""}
            >
              🍰 Shirinliklar
            </Link>
          </li>
          <li>
            <Link
              to="/drinks"
              onClick={closeMenu}
              className={location.pathname === "/drinks" ? "active" : ""}
            >
              ☕ Ichimliklar
            </Link>
          </li>
        </ul>

        {/* === Mobile Menu Icon === */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
