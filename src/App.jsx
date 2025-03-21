import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content="Perfil de Luis Zeballos, desarrollador web con experiencia en HTML, CSS, JavaScript, React.js, PHP y más." />
      <meta name="keywords" content="Luis Zeballos, perfil, desarrollador web, full stack, UX/UI, programación" />
      <meta property="og:image" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="profile" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
    </Helmet>
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  );
}
