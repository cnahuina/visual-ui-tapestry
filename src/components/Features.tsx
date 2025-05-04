import React from "react";
import FeatureItem from "./FeatureItem";

const Features: React.FC = () => {
  const features = [
    {
      emoji: "🚀",
      description: "Impulsamos tu emprendimiento",
      width: "w-[243px]",
    },
    {
      emoji: "💸",
      description: "Te educamos para integrarte al sistema financiero",
      width: "w-[261px]",
    },
    {
      emoji: "🤝",
      description: "Conectamos tus ideas con quienes pueden hacerlas realidad.",
      width: "w-[338px]",
    },
  ];

  return (
    <section
      className="bg-[rgba(239,244,252,1)] w-full text-center p-24 max-md:max-w-full max-md:px-5"
      id="features"
    >
      <h2 className="text-[rgba(3,24,57,1)] text-[40px] font-bold leading-[1.4] max-md:max-w-full">
        ¿Qué hacemos por ti?
      </h2>
      <div className="flex w-full gap-[40px_120px] justify-center flex-wrap mt-14 max-md:max-w-full max-md:mt-10">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            emoji={feature.emoji}
            description={feature.description}
            width={feature.width}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
