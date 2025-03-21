import { Helmet } from "react-helmet-async";
export default function Profile() {
  return (
    <>
      <Helmet>
        <title>Perfil Profesional | Luis Zeballos</title>
        <meta name="description" content="Perfil de Luis Zeballos, desarrollador web con experiencia en HTML, CSS, JavaScript, React.js, PHP y más." />
        <meta name="keywords" content="Luis Zeballos, perfil, desarrollador web, full stack, UX/UI, programación" />
        <meta property="og:title" content="Perfil Profesional | Luis Zeballos" />
        <meta property="og:description" content="Soy un desarrollador full stack junior con habilidades en frontend, backend y bases de datos." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
        <meta property="og:url" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
      </Helmet>

    <section className="profile">
      
      <img
        src="https://avatars.githubusercontent.com/u/156024815?v=4"
        alt="Luis Zeballos"
        className="profile-img"
      />
      <h1>Luis Zeballos</h1>
      <p>Desarrollador Full Stack Junior | Apasionado por la tecnología, diseño web y resolución de problemas.</p>

      <div className="profile-description">
        <p>
          Soy un desarrollador dedicado con experiencia en tecnologías modernas como <strong>React</strong>, <strong>Node.js</strong>, <strong>SCSS</strong>, y <strong>Base de Datos</strong>. Amo transformar ideas en productos funcionales y efectivos, siempre con un enfoque en la experiencia del usuario.
        </p>
        <p>
          Mi objetivo es seguir aprendiendo y creando soluciones innovadoras en el ámbito tecnológico. Creo que la tecnología tiene el poder de resolver problemas y conectar a las personas de formas que nunca imaginamos.
        </p>
      </div>

      <div className="profile-skills">
        <h2>Habilidades Destacadas</h2>
        <ul>
          <li>🌟 Desarrollo Frontend: React, HTML5, CSS3/SCSS, JavaScript (ES6+).</li>
          <li>⚙️ Desarrollo Backend: Node.js, Express.js, RESTful APIs.</li>
          <li>🗃️ Bases de Datos: MongoDB, MySQL.</li>
          <li>🎨 Diseño UI/UX: Conocimiento en herramientas como Figma y diseño responsive.</li>
          <li>📦 Control de Versiones: Git y GitHub.</li>
        </ul>
      </div>

      <div className="profile-socials">
        <h2>Conéctate conmigo</h2>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/luis-alejandro-zeballos-quiroz-324bab2b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/LuisFuturo01"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:luis.futuro.01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Correo: luis.futuro.01@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className="profile-buttons">
        <a
          href="https://drive.google.com/file/d/1av_xUMcgP_7VgMRk7gJ3AnMox-vEL3iC/view?usp=sharing"
          target="_blank"
          className="cv-button"
        >
          Revisar CV
        </a>
        <a
          href="https://wa.me/59171556955"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Contáctame por WhatsApp
        </a>
      </div>

      {/* Datos extras */}
      <div className="profile-extra">
        <h2>Datos Curiosos</h2>
        <ul>
          <li>📚 Siempre estoy aprendiendo algo nuevo, actualmente explorando TypeScript.</li>
          <li>💡 Me encanta resolver problemas complejos con soluciones simples y elegantes.</li>
          <li>🚀 Mi objetivo a largo plazo es liderar proyectos tecnológicos que tengan impacto global.</li>
        </ul>
      </div>
    </section>
    </>
  );
}
