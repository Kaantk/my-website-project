import React from "react";

const Projects = () => {
  return (
    <div className="p-6 flex flex-col gap-5 lg:max-w-7xl mx-auto">
      <div>
        <h2 className="font-semibold text-2xl text-center text-black-light">
          Projelerim
        </h2>
      </div>
      <div className="flex flex-col gap-3 mx-auto md:flex-row flex-wrap justify-evenly">
        <figure className="cursor-pointer relative shadow-md rounded">
          <img
            src="/src/assets/images/static/brandColors.png"
            className="rounded w-72 h-36"
            alt="Random"
          />
          <figcaption className="absolute bg-[#d0cdcd9e] w-full p-1 text-center bottom-0 transform duration-300 hover:-translate-y-6">
            <h4 className="font-semibold">REACT</h4>
            <p className="font-semibold text-sm">Brand Colors Clone</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-600"
              href="https://react-tailwind-brand-colors.vercel.app/"
            >
              https://react-tailwind-brand-colors.vercel.app/
            </a>
          </figcaption>
        </figure>
        <figure className="cursor-pointer relative">
          <img
            src="/src/assets/images/static/twitterClone.jpg"
            className="rounded w-72 h-36"
            alt="Random"
          />
          <figcaption className="absolute bg-[#d0cdcd9e] w-full p-1 text-center bottom-0 transform duration-300 hover:-translate-y-6">
            <h4 className="font-semibold">REACT</h4>
            <p className="font-semibold text-sm">Twitter Clone</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-600"
              href="https://react-tailwind-brand-colors.vercel.app/"
            >
              https://react-tailwind-brand-colors.vercel.app/
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Projects;
