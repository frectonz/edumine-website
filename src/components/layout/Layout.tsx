import React, { ReactNode } from "react";

// Components
import Head from "./Head";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head />
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
}
