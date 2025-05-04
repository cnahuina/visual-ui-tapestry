import React from "react";

interface FeatureItemProps {
  emoji: string;
  description: string;
  width?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  emoji,
  description,
  width = "w-[243px]",
}) => {
  return (
    <div className={`min-w-60 ${width}`}>
      <div className="text-black text-5xl font-semibold leading-none max-md:text-[40px]">
        {emoji}
      </div>
      <div className="text-[rgba(30,30,30,1)] text-2xl font-normal leading-8 mt-4">
        {description}
      </div>
    </div>
  );
};

export default FeatureItem;
