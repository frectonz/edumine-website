import React from 'react';
import Footer from './Footer';
import Header from './Header';

import { Seo } from './Seo';
import { HeadProvider } from 'react-head';

const Layout = ({ children }) => {
  return (
    <HeadProvider>
      <Seo />
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </HeadProvider>
  );
};

export default Layout;
