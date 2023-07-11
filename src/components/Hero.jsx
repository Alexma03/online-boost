import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import "../styles/type.css";

function Hero() {
  const [src, setSrc] = useState("");
  const typedTarget = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setSrc(window.innerWidth > 900 ? "imgs/hero1.jpg" : "imgs/hero.jpg");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const options = {
      strings: [
        " Marketing Digital ^1000",
        " Webs Modernas ^1000",
        " Redes Sociales ^1000",
        " SEO ^1000",
      ],
      typeSpeed: 130,
      backSpeed: 110,
      loop: true,
      
    };

    const typed = new Typed(typedTarget.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="text-center flex flex-col">
      <h1 className="md:text-4xl sm:text-3xl py-6 text-2xl font-bold">
        Impulsa tu negocio al siguiente nivel con
      </h1>
      <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold pb-6 text-sky-500">
        Online Boost
      </h2>
      <p className="md:text-md sm:text-lg font-bold px-8 pb-4 text-gray-400 sm:px-10 md:px-20 lg:px-40 xl:px-96">
        Bienvenido a Online Boost, la empresa líder en creación de páginas web
        para pequeñas y grandes empresas. Nos especializamos en diseñar y
        desarrollar sitios web modernos, elegantes e innovadores que se adaptan
        a las necesidades de nuestros clientes.
      </p>
      <div className="flex flex-col sm:flex-row justify-center">
        <p className="sm:text-xl md:text-3xl lg:text-4xl font-bold text-zinc-950 ">
          Impulsa tu negocio en linea con:
        </p>
        <span
          ref={typedTarget}
          className={`ps-2 sm:text-xl md:text-3xl lg:text-4xl font-bold text-sky-500`}
        ></span>
      </div>
      <img src={src} className="rounded-2xl shadow-2xl my-10 mt-20 mx-7" />
    </section>
  );
}

export default Hero;
