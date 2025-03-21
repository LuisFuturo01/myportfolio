export default function Profile() {
  return (
    <section className="profile">
      {/* Imagen y datos principales */}
      <img
        src="/src/assets/profile.jpg"
        alt="Luis Zeballos"
        className="profile-img"
      />
      <h1>Luis Zeballos</h1>
      <p>Desarrollador Full Stack Junior | Apasionado por la tecnología, diseño web y resolución de problemas.</p>

      {/* Descripción ampliada */}
      <div className="profile-description">
        <p>
          Soy un desarrollador dedicado con experiencia en tecnologías modernas como <strong>React</strong>, <strong>Node.js</strong>, <strong>SCSS</strong>, y <strong>Base de Datos</strong>. Amo transformar ideas en productos funcionales y efectivos, siempre con un enfoque en la experiencia del usuario.
        </p>
        <p>
          Mi objetivo es seguir aprendiendo y creando soluciones innovadoras en el ámbito tecnológico. Creo que la tecnología tiene el poder de resolver problemas y conectar a las personas de formas que nunca imaginamos.
        </p>
      </div>

      {/* Sección de habilidades destacadas */}
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

      {/* Redes sociales */}
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

      {/* Botones de acción */}
      <div className="profile-buttons">
        <a
          href="/src/assets/CV-luis-zeballos.pdf"
          download
          className="cv-button"
        >
          Descargar CV
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
  );
}
