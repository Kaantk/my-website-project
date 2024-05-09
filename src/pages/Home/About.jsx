import React from "react";
import User from "~/assets/images/static/user.svg";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col p-6 gap-2 md:gap-4 md:p-10 md:flex-row lg:px-0 lg:gap-32 items-center max-w-4xl mx-auto scroll-mt-10 md:scroll-mt-12"
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg lg:text-2xl">
          Merhaba Ben Kaan Tetik
        </h3>
        <p className="text-sm text-black-lightest text-justify lg:text-base">
          Her zaman yeni teknolojileri keşfederek gelişen güncel trendlerle
          birlikte kendi yeteneklerimi geliştirmeye hevesliyim. Hedefim, her
          geçen gün daha da gelişen bir Full Stack Developer olmak ve yenilikçi
          çözümlerle ekip arkadaşlarıma katkıda bulunarak projeler geliştirmek.
        </p>
        <div>
          <div>
            <div>
              <span>
                Yaş: <b>22</b>
              </span>
            </div>
            <div>
              <span>
                Mail: <b>kaan.tk3@hotmail.com</b>
              </span>
            </div>
            <div>
              <span>
                Adres: <b>Esenler / İstanbul</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <img src={User} alt="Kaan Tetik" />
    </div>
  );
};

export default About;
