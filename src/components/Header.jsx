import { useState, useEffect } from "react";

function Header() {
  const [showNav, setShowNav] = useState(false);

  function disappear() {
    setShowNav(false);
  }

  return (
    <>
      <header className="w-screen flex justify-between items-center shadow-2xs bg-gray-100 h-fit relative">
        <figure className="flex items-center gap-1.5 p-5 size-fit cursor-pointer group">
          <svg
            className="size-10  transition-rotate duration-300 group-hover:rotate-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z" />
          </svg>
          <h2 className="font-bold">Cotec</h2>
        </figure>
        <button
          className="size-fit p-5 movil-icons"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <svg
            className="size-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <nav
          className={`absolute z-10 top-0  w-4/5 p-5 h-screen transition-all duration-400 ease-in-out pointer-events-auto ${
            showNav
              ? "bg-amber-500 opacity-100 "
              : "opacity-0  pointer-events-none "
          }`}
        >
          <ul className="font-semibold flex flex-col gap-5 text-2xl h-fit w-full pt-1">
            <button
              className="size-fit movil-icons"
              onClick={() => {
                setShowNav(false);
              }}
            >
              <svg
                className="size-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
              </svg>
            </button>

            <li className="movil-text-menu" onClick={disappear}>
              <a className="" href="#">
                Consultorias
              </a>
            </li>
            <li className="movil-text-menu" onClick={disappear}>
              <a className="" href="#">
                Productos
              </a>
            </li>
            <li className="movil-text-menu" onClick={disappear}>
              <a className="" href="#">
                Sobre Nosotros
              </a>
            </li>
            <li className="movil-text-menu" onClick={disappear}>
              <a className="" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
