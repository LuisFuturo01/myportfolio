import { Helmet } from "react-helmet-async";
export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre Mí | Luis Zeballos</title>
        <meta name="description" content="Soy Luis Zeballos, desarrollador full stack junior con pasión por aprender y mejorar en el desarrollo web." />
        <meta name="keywords" content="Luis Zeballos, sobre mí, desarrollador web, full stack, programación, La Paz Bolivia" />
        <meta property="og:title" content="Sobre Mí | Luis Zeballos" />
        <meta property="og:description" content="Soy un desarrollador full stack junior con experiencia en frontend, backend y bases de datos." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
        <meta property="og:url" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
      </Helmet>
    
    <section className="about">
      <h2>Sobre Mí</h2>
      <p>
        Soy un desarrollador apasionado por la tecnología, con un enfoque en el diseño web y la optimización de la experiencia de usuario (UX). 
        Mi carrera comenzó como desarrollador frontend y, con el tiempo, me he especializado también en backend y bases de datos. Mi enfoque es ofrecer soluciones creativas y eficientes a cada desafío que enfrento.
      </p>
      <p>
        Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente. En mi tiempo libre, me dedico a estudiar sobre nuevos frameworks, herramientas de desarrollo y metodologías ágiles.
      </p>
      <p>
        Si estás buscando alguien con habilidades tanto técnicas como creativas, estaré encantado de colaborar en proyectos interesantes.
      </p>
    </section>
    </>
  );
}
