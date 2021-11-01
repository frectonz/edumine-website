import React from "react";

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="py-20">
    <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
      {reverseOrder === true ? (
        <>
          <div>{secondarySlot}</div>
          <div>{primarySlot}</div>
        </>
      ) : (
        <>
          <div>{primarySlot}</div>
          <div>{secondarySlot}</div>
        </>
      )}
    </div>
  </section>
);

export default SplitSection;
