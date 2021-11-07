import React from "react";

// Components
import Head from "./Head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
}
