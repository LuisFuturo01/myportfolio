import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <motion.div 
      className="not-found"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/" className="home-link">Volver al inicio</Link>
    </motion.div>
  );
};

export default NotFound;
