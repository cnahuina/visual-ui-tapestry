import React from "react";
import { ButtonCustom } from "./ui/button-custom";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[452px] w-full items-center text-[rgba(3,24,57,1)] justify-between px-24 py-[120px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/791c8a3de4fd464db3ca19d68c19ad86/069e6381cbf3ffec8aff7df1f91ff382899794d2?placeholderIfAbsent=true"
        alt="Hero Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative self-stretch flex min-w-60 w-full flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="w-full text-center max-md:max-w-full">
          <h1 className="text-[64px] font-bold leading-none max-md:max-w-full max-md:text-[40px]">
            Es hora de hacerlo
          </h1>
          <h2 className="text-[32px] font-semibold leading-none mt-2 max-md:max-w-full">
            Celebramos tu inclusión
          </h2>
        </div>
        <ButtonCustom
          variant="primary"
          className="self-center mt-10"
          onClick={() => console.log("CTA clicked")}
        >
          Iniciemos ahora!
        </ButtonCustom>
      </div>
    </section>
  );
};

export default Hero;
