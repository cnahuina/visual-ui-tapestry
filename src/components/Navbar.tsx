import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full">
      <nav className="flex w-full items-center gap-[40px_100px] text-base font-semibold leading-none justify-between flex-wrap px-24 py-6 max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/791c8a3de4fd464db3ca19d68c19ad86/5f19750e00b3d73d14c18dcf0c0587857d03479c?placeholderIfAbsent=true"
          alt="Inclap Logo"
          className="aspect-[3.69] object-contain w-[140px] self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch flex min-w-60 items-center gap-[40px_51px] my-auto max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-10 text-black my-auto">
            <a
              href="#about"
              className="self-stretch my-auto hover:text-primary"
            >
              ¿Quiénes somos?
            </a>
            <a
              href="#contact"
              className="self-stretch my-auto hover:text-primary"
            >
              Contáctanos
            </a>
          </div>
          <button
            className="self-stretch border gap-2 text-[rgba(3,24,57,1)] whitespace-nowrap my-auto px-6 py-2 rounded-[32px] border-[rgba(3,24,57,1)] border-solid max-md:px-5 hover:bg-[rgba(3,24,57,0.05)] transition-colors"
            aria-label="Unirme"
          >
            Unirme
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
