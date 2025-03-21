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
  );
}
