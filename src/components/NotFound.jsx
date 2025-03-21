import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async"

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página No Encontrada | Luis Zeballos</title>
        <meta name="description" content="Lo sentimos, la página que buscas no existe. Regresa al inicio para seguir explorando." />
      </Helmet>
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
    </>
  );
};

export default NotFound;
