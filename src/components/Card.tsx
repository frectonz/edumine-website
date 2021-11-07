import React, { ReactNode } from "react";

interface CardProps {
  className: "";
  children: ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={`p-12 rounded-lg border border-solid border-gray-200 ${className}`}
      style={{
        boxShadow: "0 10px 28px rgba(0,0,0,.08)",
      }}
    >
      {children}
    </div>
  );
}
