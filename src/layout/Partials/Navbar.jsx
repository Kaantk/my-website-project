import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ isScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { id: 1, title: "Hakkında", href: "/hakkında" },
    { id: 2, title: "Hizmetler", href: "/hizmetler" },
    { id: 3, title: "Yetenekler", href: "/yetenekler" },
    { id: 4, title: "Projelerim", href: "/projelerim" },
    { id: 5, title: "Deneyim", href: "/deneyim" },
    { id: 6, title: "Referanslarım", href: "/referanslarım" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between py-2 px-4 md:py-4 md:px-8 lg:py-5 max-w-7xl mx-auto">
        <a href="#" className="text-xl font-bold">
          Logo
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
              <Link
                to={item.href}
                className="border-transparent hover:border-blue-dark hover:border-b-2 transition-all duration-100 ease-in-out hover:text-blue-dark"
              >
                {item.title}
              </Link>
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
        <div className="px-4 pb-4 pt-2 md:px-8 md:pt-1 md:pb-4 border-b drop-shadow-2xl">
          <ol className="font-semibold text-black-lightest flex flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Navbar;