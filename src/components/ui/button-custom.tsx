import React from "react";
import { cn } from "@/lib/utils";

interface ButtonCustomProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export const ButtonCustom: React.FC<ButtonCustomProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "text-xl font-medium leading-none px-8 py-4 rounded-[32px]",
        variant === "primary" &&
          "bg-[rgba(0,194,177,1)] text-white hover:bg-[rgba(0,174,157,1)]",
        variant === "outline" &&
          "border-[rgba(3,24,57,1)] border-solid border-2 text-[rgba(3,24,57,1)] hover:bg-[rgba(3,24,57,0.05)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
