import React from 'react';
import Button from '../Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        Edu<b>Mine</b>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <AnchorLink href="#earlyAccess">
          <Button className="text-sm">Register</Button>
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
