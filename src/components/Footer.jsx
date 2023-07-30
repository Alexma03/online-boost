import React from "react";

function Footer() {
  return (
    <div className="px-10 py-7 bg-black text-gray-300 md:px-20 lg:px-40 2xl:px-80 flex flex-col md:flex-row md:justify-between items-center">
      <div className="flex flex-col items-center text-center md:text-left md:items-start md:w-2/5 gap-4">
        <a href="/">
          <img src="imgs/favicon.png" className="w-28" />
        </a>
        <p>
          Nuestro equipo de diseñadores, programadores y expertos en marketing
          se encargaran de revalorizar su marca y llevarla a lo más alto.
        </p>
        <p>contacto@onlineboost.es</p>
        <p>677 39 39 39</p>
      </div>
      <div className="flex flex-row gap-5 md:gap-8 mt-16">
        <div className="flex flex-col">
          <a href="/">Home</a>
          <a href="/sobre-nosotros">Sobre Nosotros</a>
          <a href="/nuestro-obetivo">Nuestro Objetivo</a>
          <a href="/nuestros-servicios">Nuestros Servicios</a>
        </div>
        <div className="flex flex-col">
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
        <div className="flex flex-col">
          <a href="#">Politica de privacidad</a>
          <a href="#">Aviso legal</a>
          <a href="#">Preguntas Frecuentes</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
