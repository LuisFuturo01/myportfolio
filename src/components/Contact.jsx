import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolioLuis", // Reemplázalo con tu Service ID de EmailJS
        "template_tjxa21n", // Reemplázalo con tu Template ID de EmailJS
        form.current,
        "uftlo6n2RL8bs0Hh5" // Reemplázalo con tu User ID de EmailJS
      )
      .then(
        (result) => {
          alert("Mensaje enviado exitosamente.");
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Luis Zeballos</title>
        <meta name="description" content="Ponte en contacto conmigo para colaborar en proyectos de desarrollo web. Email: luis.futuro.01@gmail.com" />
        <meta name="keywords" content="contacto, Luis Zeballos, desarrollador web, email, teléfono" />
        <meta property="og:title" content="Contacto | Luis Zeballos" />
        <meta property="og:description" content="¿Buscas un desarrollador web? Contáctame a través de mi email o teléfono." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
        <meta property="og:url" content="https://avatars.githubusercontent.com/u/156024815?v=4" />
      </Helmet>
    <section className="contact">
      <h2>Contacto</h2>
      <p>
        Si tienes alguna pregunta o quieres colaborar conmigo, no dudes en
        ponerte en contacto.
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required placeholder="Tu nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required placeholder="Tu correo electrónico" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required placeholder="Escribe tu mensaje" />
        </div>
        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </section>
    </>
  );
}
