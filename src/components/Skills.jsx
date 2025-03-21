import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaGithub } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiSass, SiLaravel, SiComposer } from "react-icons/si";
import { Helmet } from "react-helmet-async";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", description: "Estructura semántica y accesible." },
  { icon: <FaCss3Alt />, name: "CSS3", description: "Diseño responsivo y animaciones." },
  { icon: <FaJs />, name: "JavaScript", description: "Interactividad dinámica con ES6+." },
  { icon: <FaReact />, name: "React.js", description: "Componentes reutilizables y SPA." },
  { icon: <SiSass />, name: "Sass", description: "Estilos avanzados con variables y mixins." },
  { icon: <FaPhp />, name: "PHP", description: "Backend robusto con frameworks modernos." },
  { icon: <SiLaravel />, name: "Laravel", description: "Framework PHP para aplicaciones escalables." },
  { icon: <SiComposer />, name: "Composer", description: "Gestión eficiente de dependencias PHP." },
  { icon: <FaDatabase />, name: "Bases de Datos", description: "Modelado y optimización de queries." },
  { icon: <SiMysql />, name: "MySQL", description: "Gestión de datos relacionales eficiente." },
  { icon: <SiPostgresql />, name: "PostgreSQL", description: "Base de datos avanzada y escalable." },
  { icon: <FaGithub />, name: "GitHub", description: "Control de versiones y colaboración." },
];

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Mis Habilidades | Luis Zeballos</title>
        <meta name="description" content="Tengo experiencia en HTML, CSS, JavaScript, React.js, PHP, Laravel, MySQL y más." />
        <meta name="keywords" content="habilidades, desarrollo web, frontend, backend, React.js, PHP, MySQL, UX/UI" />
        <meta property="og:title" content="Mis Habilidades | Luis Zeballos" />
        <meta property="og:description" content="Conoce mis habilidades en frontend, backend, bases de datos y diseño UX/UI." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
        <meta property="og:url" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
      </Helmet>
    <section className="skills">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
