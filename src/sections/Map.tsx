import React from "react";

export default function Map() {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl lg:text-5xl font-semibold px-2">Find Us At</h2>
      <p className="px-2 my-2">
        Tracon Building, 6th floor, MinT Startup Incubation Programme
      </p>
      <iframe
        width="100%"
        height="450"
        loading="lazy"
        allowFullScreen
        style={{ border: 0, margin: "1rem" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.410049564619!2d38.749502214786474!3d9.026306893522746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b851a75a2820f%3A0xdfb815bb15d4b510!2sTracon%20tower!5e0!3m2!1sen!2set!4v1636290033259!5m2!1sen!2set"
      />
    </section>
  );
}
