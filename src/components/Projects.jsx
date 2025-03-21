export default function Projects() {
  const projects = [
    {
      title: "E-commerce Zequitex",
      description: "Tienda en línea para productos textiles, con un sistema de pago integrado y gestión de inventario.",
      link: "#",
      techStack: "React, Node.js, MongoDB"
    },
    {
      title: "Portfolio Personal",
      description: "Un portafolio personal desarrollado con React para mostrar mis habilidades, proyectos y experiencia.",
      link: "#",
      techStack: "React, SCSS"
    },
    {
      title: "Sistema de Inventarios",
      description: "Aplicación web para la gestión de stock de productos en empresas, incluyendo reportes y notificaciones.",
      link: "#",
      techStack: "Laravel, MySQL"
    }
  ];

  return (
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
  );
}
