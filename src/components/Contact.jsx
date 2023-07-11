import Button from "./Button.jsx";

function Contact() {
  return (
    <section
      className="relative flex py-14 justify-center"
      style={{ backgroundImage: `url(imgs/hero1.jpg)` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50"></div>
      <div className="flex flex-col z-10 gap-8 md:flex-row">
        <h2 className="text-2xl font-bold text-center md:text-left flex items-center">
          Y tú, ¿te atreves a llevar tu negocio al siguien nivel?
        </h2>
        <Button
          classNameDiv="flex flex-col justify-center items-center"
          link="/contacto"
          className="bg-black text-white py-3 px-7 hover:scale-110 transition duration-300"
        >
          Contáctanos
        </Button>
      </div>
    </section>
  );
}

export default Contact;
