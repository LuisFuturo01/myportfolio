import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaGithub } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiSass, SiLaravel, SiComposer } from "react-icons/si";

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
  );
}
