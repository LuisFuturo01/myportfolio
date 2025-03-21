import React, { useRef } from "react";
import emailjs from "emailjs-com";

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
  );
}
