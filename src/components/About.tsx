import React from "react";
import { ButtonCustom } from "./ui/button-custom";

const About: React.FC = () => {
  return (
    <section
      className="bg-white flex w-full gap-10 flex-wrap px-24 py-20 max-md:max-w-full max-md:px-5"
      id="about"
    >
      <div className="min-w-60 text-[rgba(3,24,57,1)] flex-1 shrink basis-[0%] max-md:max-w-full">
        <h2 className="text-[40px] font-bold leading-[1.4] max-md:max-w-full">
          {" "}
          Empieza hoy
        </h2>
        <div className="flex w-full flex-col items-stretch font-normal mt-10 max-md:max-w-full">
          <p className="text-2xl leading-10 max-md:max-w-full">
            Da el primer paso hacia tu futuro. Únete a{" "}
            <span className="font-semibold">Inclap</span> y transforma tu idea
            en una historia de éxito.
          </p>
          <p className="text-base leading-7 mt-8 max-md:max-w-full">
            Tu idea. Nuestra inteligencia. Un futuro compartido.
          </p>
          <ButtonCustom
            variant="outline"
            className="mt-8 self-start"
            onClick={() => console.log("Learn more clicked")}
          >
            Conocer más
          </ButtonCustom>
        </div>
      </div>
      <div className="flex min-w-60 flex-col items-center w-[358px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/791c8a3de4fd464db3ca19d68c19ad86/fbb6de4f7241e8f5147b2657853f9bc6c5bc0a52?placeholderIfAbsent=true"
          alt="About Inclap"
          className="aspect-[1] object-contain w-[358px] max-w-full rounded-[35px]"
        />
      </div>
    </section>
  );
};

export default About;
