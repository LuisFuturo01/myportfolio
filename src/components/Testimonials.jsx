import { Helmet } from "react-helmet-async";
export default function Testimonials() {
  const testimonials = [
    { 
      name: "Jose Luis Zeballos", 
      comment: "Luis ha demostrado ser un desarrollador con una gran disposición para aprender y adaptarse rápidamente a nuevos desafíos." 
    },
    { 
      name: "Marina Cardenas", 
      comment: "A pesar de ser nuevo en el desarrollo web, Luis tiene un excelente sentido de diseño y atención al detalle, lo cual es impresionante." 
    },
    { 
      name: "Jose Churqui", 
      comment: "Luis tiene un gran entusiasmo por el desarrollo y siempre está buscando mejorar sus habilidades. Es un placer trabajar con alguien tan motivado." 
    },
    { 
      name: "Carlos Fernández", 
      comment: "Es increíble ver cómo Luis ha aprovechado sus primeros meses para aprender rápidamente y ya está contribuyendo con ideas creativas y prácticas en los proyectos." 
    }
  ];
  

  return (
    <>
      <Helmet>
        <title>Testimonios | Luis Zeballos</title>
        <meta name="description" content="Descubre lo que dicen clientes y compañeros sobre mi trabajo en desarrollo web y diseño UX/UI." />
        <meta name="keywords" content="testimonios, clientes, feedback, opiniones, desarrollo web, UX/UI" />
        <meta property="og:title" content="Testimonios | Luis Zeballos" />
        <meta property="og:description" content="Conoce las opiniones de clientes y colegas sobre mi trabajo." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
        <meta property="og:url" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
      </Helmet>
    <section className="testimonials">
      <h2>Testimonios</h2>
      <div className="testimonial-list">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p>"{t.comment}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
