import Button from "../components/Button";

function AgendarLlamada() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <Button
        classNameDiv="text-center my-auto m hover:scale-105 transition duration-300"
        className=" flex text-2xl ring-1 ring-black py-3 px-5 rounded-full m-6 text-black"
        link="/contacto"
      >
        Agendar una llamada
        <img src="imgs/ring-phone.png" alt="telefono" className="w-8 ml-2 mb-1" />
      </Button>
      <img src="imgs/contactUs.svg" alt="contactUs" className="w-60" />
    </div>
  );
}

export default AgendarLlamada;
