import Button from "./Button.jsx";

function Card({ img, title, description, id, button = "Saber más" }) {
  return (
    <section
      className="relative flex flex-col items-center md:flex-row rounded-2xl m-8 p-10 shadow-2xl"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-40"></div>
      <div className="border-b md:border-b-0 md:border-r border-black md:pr-10 text-center justify-center items-center flex flex-col w-full md:w-1/3 z-10 gap-8 pb-10 md:pb-0">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button link={id} className="ring-black ">{button}</Button>
      </div>
      <div className="md:pl-10 w-full md:w-2/3 z-10 text-center pt-10 md:pt-0">
        <p className="font-semibold text-lg">{description}</p>
      </div>
    </section>
  );
}

export default Card;
