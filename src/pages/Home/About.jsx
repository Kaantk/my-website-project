import React from "react";

const About = () => {
  return (
    <div className="flex flex-col p-6 gap-2 md:gap-4 md:p-10 md:flex-row lg:px-0 lg:gap-32 items-center max-w-4xl mx-auto ">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg lg:text-2xl">
          Merhaba Ben Kaan Tetik
        </h3>
        <p className="text-sm text-black-lightest text-justify lg:text-base">
          Robotpos Otomasyon A.Ş. Şirketinde Research And Development Specialist
          ve Key Account Proje Yönetici olarak görev almaktayım. İlgili
          görevlerimin yanı sıra ASP.NET Core Teknolojisi üzerinde projeler
          hazırlayarak kendimi geliştiriyorum.
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
      <img src="/src/assets/images/static/user.svg" alt="Kaan Tetik" />
    </div>
  );
};

export default About;
