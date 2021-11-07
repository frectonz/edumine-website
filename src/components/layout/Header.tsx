import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Components
import Button from "../Button";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <AnchorLink className="px-4" href="#headline">
            Edu<b>Mine</b>
          </AnchorLink>
        </div>
        <div className="flex mt-4 sm:mt-0">
          <AnchorLink className="px-4" href="#features">
            Features
          </AnchorLink>
          <AnchorLink className="px-4" href="#services">
            Services
          </AnchorLink>
          <AnchorLink className="px-4" href="#meetTheTeam">
            Team
          </AnchorLink>
          <AnchorLink className="px-4" href="#history">
            History
          </AnchorLink>
        </div>
        <div className="md:block my-2">
          <AnchorLink href="#earlyAccess">
            <Button className="text-sm">Register</Button>
          </AnchorLink>
        </div>
      </div>
    </header>
  );
}
