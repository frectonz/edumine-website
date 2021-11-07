import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Components
import Button from "../components/Button";

// Svgs
import LogoIcon from "../assets/svgs/Logo.svg";

export default function Headline() {
  return (
    <section id="headline" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex gap-10">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Smart school management system.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            We are a data-driven, school-centric web and app development
            company. We are obsessed with employing Data- Science in educational
            sectors. Expunging their defects through responsive, smart, and
            sustainable technology.
          </p>
          <p className="mt-8 md:mt-12">
            <AnchorLink href="#earlyAccess">
              <Button size="lg">Register For Early Access</Button>
            </AnchorLink>
          </p>
        </div>
        <div className="lg:w-2/4">
          <LogoIcon />
        </div>
      </div>
    </section>
  );
}
