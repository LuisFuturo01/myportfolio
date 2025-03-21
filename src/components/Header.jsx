import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconos para el menú hamburguesa

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
      <div className="logo">LZ</div>
      </Link>

      {/* Menú hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <X /> : <Menu />}
      </div>

      {/* Navegación principal */}
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(false)}>
        {["/", "/about", "/skills", "/projects", "/testimonials", "/contact"].map((path, index) => (
          <Link
            key={index}
            to={path}
            className={location.pathname === path ? "active" : ""}
          >
            {path === "/" ? "Inicio" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
