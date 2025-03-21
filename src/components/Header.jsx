import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const location = useLocation();

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <span>LZ</span>
      </div>
      <nav>
        {["/", "/about", "/skills", "/projects", "/testimonials", "/contact"].map((path, index) => (
          <Link
            key={index}
            to={path}
            className={location.pathname === path ? "active" : ""}
          >
            {path === "/" ? "Inicio" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            {location.pathname === path && <span className="underline"></span>}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
