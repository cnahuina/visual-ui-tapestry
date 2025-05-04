import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[rgba(3,24,57,1)] flex w-full flex-col items-stretch text-white font-normal text-center justify-center pt-20 pb-10 px-24 max-md:max-w-full max-md:px-5"
      id="contact"
    >
      <div className="flex w-full gap-6 text-base leading-7 flex-wrap max-md:max-w-full md:justify-around">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/791c8a3de4fd464db3ca19d68c19ad86/630d5060895631fd171cbd8430bd049c7edb2e8b?placeholderIfAbsent=true"
          alt="Inclap Logo"
          className="aspect-[3.72] object-contain w-[182px] shrink-0"
        />
        <div className="flex min-w-60 items-center gap-10 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full md:justify-end">
          <div className="self-stretch flex flex-col whitespace-nowrap justify-center w-[180px] my-auto">
            <a
              href="#"
              className="w-[42px] hover:text-gray-300 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#"
              className="w-[43px] mt-6 hover:text-gray-300 transition-colors"
            >
              Legal
            </a>
          </div>
          <div className="self-stretch flex flex-col justify-center w-[180px] my-auto">
            <a
              href="#features"
              className="w-36 max-w-full hover:text-gray-300 transition-colors"
            >
              Nuestros servicios
            </a>
            <a
              href="#"
              className="w-[84px] whitespace-nowrap mt-6 hover:text-gray-300 transition-colors"
            >
              Educación
            </a>
          </div>
          <div className="self-stretch flex flex-col items-stretch justify-center w-[180px] my-auto">
            <a
              href="#"
              className="max-w-full w-[172px] hover:text-gray-300 transition-colors"
            >
              Preguntas frecuentes
            </a>
            <a
              href="#contact"
              className="w-[105px] max-w-full whitespace-nowrap mt-6 hover:text-gray-300 transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-sm leading-none mt-14 max-md:max-w-full max-md:mt-10">
        Todos los derechos reservados 2025
      </div>
    </footer>
  );
};

export default Footer;
