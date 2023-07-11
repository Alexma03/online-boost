import Button from "./Button.jsx";

function CardImg() {
  return (
    <div
      className="h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(imgs/laptop.jpg)` }}
    >
      <Button link={"/contacto"} className="text-white ring-white py-2 px-4 " classNameDiv={"text-center pt-[750px] pb-[75px]"}>
        Contáctanos
      </Button>
    </div>
  );
}

export default CardImg;
