import React, { useState } from "react";


function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="flex justify-between items-center bg-slate-100 px-8 py-5 m-7 rounded-xl drop-shadow-xl">
      <a href="/">
        <img
          src="/imgs/favicon.png"
          alt="Online Boost logo"
          className="ml-0 w-20 hover:scale-110 transition duration-300"
        />
      </a>

      {/* Menu Desktop */}
      <ul className="hidden justify-center gap-4 font-poppinsm md:text-sm lg:text-xl font-semibold md:flex">
        <li className="hover:bg-gray-200 px-2 py-1 rounded-md transition duration-200 text-center">
          <a href="/sobre-nosotros">Sobre Nosotros</a>
        </li>
        <li className="hover:bg-gray-200 px-2 py-1 rounded-md transition duration-200 text-center">
          <a href="/nuestro-obetivo">Nuestro Objetivo</a>
        </li>
        <li className="hover:bg-gray-200 px-2 py-1 rounded-md transition duration-200 text-center">
          <a href="/nuestros-servicios">Nuestros Servícios</a>
        </li>
      </ul>
      <a
        href="/contacto"
        className="hidden justify-end bg-zinc-950 text-white py-3 px-6 rounded-3xl hover:bg-zinc-900 hover:scale-110 transition duration-300 md:block"
      >
        Contáctanos
      </a>

      {/* Hamburger */}
      <div onClick={handleMenu} className="block md:hidden">
        {menu ? <img src="icons/cancelar.png" className="w-7" /> : <img src="icons/menu.png" className="w-7"/>}
      </div>

      {/* Menu Mobile */}
      <div
        className={
          menu
            ? "w-full bg-slate-100 rounded-md absolute top-28 left-0 flex justify-center text-center"
            : "hidden"
        }
      >
        <ul className="">
          <li className="hover:bg-gray-300 p-4 rounded-md transition duration-200 text-xl">
            <a href="/">Home</a>
          </li>
          <li className="hover:bg-gray-300 p-4 rounded-md transition duration-200 text-xl">
            <a href="/sobre-nosotros">Sobre Nosotros</a>
          </li>
          <li className="hover:bg-gray-300 p-4 rounded-md transition duration-200 text-xl">
            <a href="/nuestro-equipo">Nuestro Equipo</a>
          </li>
          <li className="hover:bg-gray-300 p-4 rounded-md transition duration-200 text-xl">
            <a href="/nuestros-servicios">Nuestros Servícios</a>
          </li>
          <a className="justify-end bg-zinc-950 text-white py-3 px-6 rounded-3xl hover:bg-zinc-900 hover:scale-105 transition duration-300 m-4 "
          href="/contacto"
          >
            Contáctanos
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
