import React from 'react';
import Footer from './Footer';
import Header from './Header';

import { Seo } from './Seo';

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
