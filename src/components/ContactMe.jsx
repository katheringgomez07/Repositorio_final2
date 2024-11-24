import React from 'react';

const Feedback = () => {
  return (
    <section>
      <h2>¡Déjame un Mensaje!</h2>
      <form>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo electrónico" required />
        <textarea placeholder="Escribe tu mensaje aquí..." required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Feedback;
