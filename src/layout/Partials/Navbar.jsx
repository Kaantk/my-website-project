import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import Logo from "~/assets/images/static/KaanTetikLogo.svg";

const Navbar = ({ isScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { id: 1, title: "Hakkında", href: "#about" },
    { id: 2, title: "Tecrübelerim", href: "#experiences" },
    { id: 3, title: "Projelerim", href: "#projects" },
    { id: 4, title: "İletişim", href: "#contact" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between py-3 px-6 md:py-3 md:px-8 max-w-7xl mx-auto">
        <a href="#" className="text-xl font-bold">
          <img src={Logo} alt="Kaan Tetik Logo" className="w-20 md:w-24" />
        </a>
        {/* Mobile, Tablet Menu Button */}
        <button
          className="text-3xl lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="collapseExample"
          aria-expanded={isOpen}
        >
          <IoMenu />
        </button>
        {/* Laptop Content */}
        <ol className="font-semibold text-black-lightest gap-6 hidden lg:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <HashLink
                to={item.href}
                smooth={true}
                duration={500}
                className="border-transparent hover:border-blue-dark hover:border-b-2 transition-all duration-100 ease-in-out hover:text-blue-dark"
              >
                {item.title}
              </HashLink>
            </li>
          ))}
        </ol>
      </nav>
      {/* Mobile, Tablet Menu Content */}
      <div
        id="collapseExample"
        className={`overflow-hidden transition-all ease-in-out duration-700 transform ${
          isOpen ? "max-h-56" : "max-h-0"
        } ${isScroll > 46 ? "bg-white drop-shadow-sm" : "bg-blue-lighest"}`}
      >
        <div className="px-6 pb-4 pt-2 md:px-8 md:pt-1 md:pb-4 border-b drop-shadow-2xl">
          <ol className="font-semibold text-black-lightest flex flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <HashLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  {item.title}
                </HashLink>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Navbar;
