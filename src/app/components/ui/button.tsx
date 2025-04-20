"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Or use outline if you prefer
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`group inline-flex items-center gap-2 rounded-md border border-gray-500 px-4 py-3 text-sm font-medium transition-colors hover:border-teal-500 ${className}`}
      {...props}
    >
      {text}
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
};

export default Button;
