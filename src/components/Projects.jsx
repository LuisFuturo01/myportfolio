import { Helmet } from "react-helmet-async";
export default function Projects() {
  const projects = [
    {
      title: "E-commerce Zequitex",
      description: "Tienda en línea para productos textiles, con un sistema de pago integrado y gestión de inventario.",
      link: "https://zequitex.com",
      techStack: "React, html, css, javaScript, php, sql"
    },
    {
      title: "Portfolio Personal",
      description: "Un portafolio personal desarrollado con React para mostrar mis habilidades, proyectos y experiencia.",
      link: "https://portfolio-luis-zeballos.netlify.app/",
      techStack: "React, SCSS"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mis Proyectos | Luis Zeballos</title>
        <meta name="description" content="Explora mis proyectos en desarrollo web, incluyendo e-commerce, UX/UI y más." />
        <meta name="keywords" content="proyectos, desarrollo web, React.js, PHP, Laravel, MySQL, UX/UI" />
        <meta property="og:title" content="Mis Proyectos | Luis Zeballos" />
        <meta property="og:description" content="Descubre mis proyectos de desarrollo web y diseño UX/UI." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
        <meta property="og:url" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
      </Helmet>
    <section className="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tecnologías: </strong>{project.techStack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
