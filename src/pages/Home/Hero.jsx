import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import MediaIcons from "~/components/MediaIcons";

const Hero = () => {
  return (
    <>
      <div className="hero-container bg-blue-lighest pb-2 flex flex-col items-center md:pb-0 md:flex-row md:items-center md:justify-center md:gap-10 lg:gap-28">
        <img
          src="/src/assets/images/illustrations.svg"
          alt="illustrations"
          className="w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/4"
        />
        {/* Hero Container User Info */}
        <div className="text-black-light">
          <p className="text-xl font-light ">MERHABA!</p>
          <h1 className="mb-4 lg:mb-6">
            <b className="text-2xl font-bold lg:text-4xl">Ben Kaan Tetik</b>
            <img
              src="/src/assets/images/maker.svg"
              alt="maker"
              className="ml-24"
            />
          </h1>
          <p className="text-lg lg:text-xl">FRONTEND JUNIOR DEVELOPER</p>
          <MediaIcons />
          {/* Form Link */}
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 shadow-lg bg-blue-dark hover:bg-opacity-80 text-white font-semibold py-2 px-7 rounded-full transition-all ease-in-out duration-300 transform hover:-translate-y-1"
          >
            Bana Ulaşın
            <FaArrowRight className="text-lg" />
          </Link>
        </div>
      </div>
      <div className="bg-wave-pattern h-20 w-full"></div>
    </>
  );
};

export default Hero;
