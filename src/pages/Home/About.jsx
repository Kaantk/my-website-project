import React from "react";
import UserPhoto from "~/assets/images/static/KaanTetikPhoto.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col p-6 gap-2 md:gap-10 md:p-10 md:flex-row lg:px-0 lg:gap-20 items-center max-w-4xl mx-auto scroll-mt-14 md:scroll-mt-10"
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
                Mail: <b>kaantetk@gmail.com</b>
              </span>
            </div>
            <div>
              <span>
                Adres: <b>Şişli / İstanbul</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <img
        src={UserPhoto}
        alt="Kaan Tetik"
        className="rounded-xl w-full md:w-60 lg:w-72 shadow-2xl"
      />
    </div>
  );
};

export default About;
