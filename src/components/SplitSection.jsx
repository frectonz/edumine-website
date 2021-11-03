import React from "react";

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="py-20">
    <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
      {reverseOrder === true ? (
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
