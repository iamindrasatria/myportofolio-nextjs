import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex w-full flex-col items-center">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
