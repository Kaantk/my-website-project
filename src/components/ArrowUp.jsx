import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const ArrowUp = ({ isScroll }) => {
  return (
    <>
      <a
        href="#"
        className={`fixed shadow-2xl bottom-2 right-2 md:bottom-4 md:right-4 lg:bottom-8 lg:right-8 lg:text-xl bg-black-light rounded-full p-2 text-white hover:bg-black-lightest 
        transition-all ease-in-out duration-300 transform ${
          isScroll < 46 ? "invisible opacity-0" : "visible opacity-100"
        }`}
      >
        <IoIosArrowUp />
      </a>
    </>
  );
};

export default ArrowUp;
