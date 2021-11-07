import React, { ReactNode } from "react";

interface SplitSectionProps {
  reverseOrder?: boolean;
  primarySlot: ReactNode;
  secondarySlot: ReactNode;
}

const SplitSection = ({
  primarySlot,
  secondarySlot,
  reverseOrder = false,
}: SplitSectionProps) => (
  <section className="py-20">
    <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
      {reverseOrder ? (
        <>
          <div className="p-4">{secondarySlot}</div>
          <div className="p-4">{primarySlot}</div>
        </>
      ) : (
        <>
          <div className="p-4">{primarySlot}</div>
          <div className="p-4">{secondarySlot}</div>
        </>
      )}
    </div>
  </section>
);

export default SplitSection;
