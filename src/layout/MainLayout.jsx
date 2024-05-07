import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Partials/Navbar";
import Footer from "./Partials/Footer";
import ArrowUp from "~/components/ArrowUp";

const MainLayout = () => {
  const [isScroll, setIsScroll] = useState(0); // Sayfa Y eksenindeki scroll degeri

  const handleScroll = () => {
    setIsScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed transition-all ease-in-out duration-700 transform top-0 w-full z-10  ${
          isScroll > 46 ? "bg-white drop-shadow-sm" : "bg-blue-lighest "
        }`}
      >
        <Navbar isScroll={isScroll} />
      </header>
      <main className={`mt-[46px] md:mt-[62px] lg:mt-[68px]`}>
        <Outlet />
        <ArrowUp isScroll={isScroll} />
      </main>
      <footer className="bg-blue-lighest">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
