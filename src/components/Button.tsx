import React, { ReactNode } from "react";

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
};

interface ButtonProps {
  className?: string;
  children: ReactNode;
  size?: keyof typeof sizes;
}

export default function Button({
  size,
  children,
  className = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        rounded
        text-white
    `}
      style={{
        backgroundColor: "rgb(51, 123, 230)",
      }}
    >
      {children}
    </button>
  );
}
