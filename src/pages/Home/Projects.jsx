import React from "react";
import BrandColors from "~/assets/images/static/brandColors.png";
import TwitterClone from "~/assets/images/static/twitterClone.jpg";

const Projects = () => {
  return (
    <div
      id="projects"
      className="p-6 flex flex-col gap-5 lg:max-w-7xl mx-auto scroll-mt-14 md:scroll-mt-16"
    >
      <div>
        <h2 className="font-semibold text-2xl text-center text-black-light">
          Projelerim
        </h2>
      </div>
      <div className="flex flex-col gap-3 mx-auto md:flex-row lg:gap-10 flex-wrap justify-evenly">
        <figure className="cursor-pointer relative shadow-lg rounded">
          <img
            src={BrandColors}
            className="rounded w-72 h-36"
            alt="Brand Colors Project"
          />
          <figcaption className="absolute bg-[#d0cdcd9e] w-full p-1 text-center bottom-0 transform duration-300 hover:-translate-y-6 rounded">
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
        <figure className="cursor-pointer relative shadow-lg">
          <img
            src={TwitterClone}
            className="rounded w-72 h-36"
            alt="Twitter Clone Project"
          />
          <figcaption className="absolute bg-[#d0cdcd9e] w-full p-1 text-center bottom-0 transform duration-300 hover:-translate-y-6 rounded">
            <h4 className="font-semibold">REACT</h4>
            <p className="font-semibold text-sm">Twitter Clone</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-600"
              href="https://react-tailwind-twitter-clone.vercel.app/"
            >
              https://react-tailwind-twitter-clone.vercel.app/
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Projects;
