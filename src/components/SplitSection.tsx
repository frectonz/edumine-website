import React, { ReactNode } from "react";

interface SplitSectionProps {
  id?: string;
  className?: string;
  primarySlot: ReactNode;
  secondarySlot: ReactNode;
}

const SplitSection = ({
  id,
  className,
  primarySlot,
  secondarySlot,
}: SplitSectionProps) => (
  <section id={id} className={`py-20 ${className}`}>
    <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="p-4">{primarySlot}</div>
      <div className="p-4">{secondarySlot}</div>
    </div>
  </section>
);

export default SplitSection;
