import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const MediaIcons = () => {
  return (
    <>
      {/* Social Media Icons */}
      <ol className="flex items-center gap-4 my-4 md:my-6 lg:my-8">
        <li>
          <a
            href="https://www.instagram.com/kaan.tk2?igsh=bG94dXV4ZzV0eWN2"
            target="_blank"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kaan-tetik-ba2396228/"
            target="_blank"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Kaantk?tab=repositories" target="_blank">
            <FaGithub className="text-2xl" />
          </a>
        </li>
      </ol>
    </>
  );
};

export default MediaIcons;
