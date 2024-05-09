import React from "react";
import Bank from "~/assets/images/bank.svg";
import Teachering from "~/assets/images/teachering.svg";

const Experiences = () => {
  return (
    <div className="p-6 flex flex-col gap-5 lg:max-w-7xl mx-auto">
      {/* Title */}
      <div>
        <h2 className="font-semibold text-2xl text-center text-black-light">
          Tecrübelerim
        </h2>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-3">
        {/* Row - One */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-6 lg:gap-10 mx-auto">
          {/* Box - One */}
          <div className="rounded-lg border max-w-md">
            <div className="bg-blue-lighest flex justify-between md:gap-2 p-3 lg:p-4">
              <div className="flex flex-col">
                <h4 className="font-semibold lg:text-lg">
                  Birleşik Fon Bankası
                </h4>
                <span className="text-sm text-black-lightest lg:text-base">
                  Sistem Destek Uzman Yardımcısı
                </span>
                <span className="text-sm text-black-lightest">
                  2023 - Halen
                </span>
              </div>
              <img
                src={Bank}
                alt="Bank Card"
                className="w-24 lg:w-28 max-h-[72px]"
              />
            </div>
            <div className="p-3 lg:p-4">
              <p className="text-justify text-sm text-black-lightest">
                İşten arta kalan vakitlerimde ASP.NET Core Teknolojilerinde MVC
                modelinde Web Projeleri Geliştirmekteyim.
              </p>
            </div>
          </div>
          {/* Box - Two */}
          <div className="rounded-lg border max-w-md">
            <div className="bg-blue-lighest flex justify-between md:gap-2 p-3 lg:p-4">
              <div className="flex flex-col">
                <h4 className="font-semibold lg:text-lg">
                  Ahlatçı Ödeme ve Elektronik Para Hizmetleri
                </h4>
                <span className="text-sm text-black-lightest lg:text-base">
                  Stajyer
                </span>
                <span className="text-sm text-black-lightest">2022 - 2023</span>
              </div>
              <img
                src={Teachering}
                alt="Bank Card"
                className="w-24 lg:w-28 max-h-[72px]"
              />
            </div>
            <div className="p-3 lg:p-4">
              <p className="text-justify text-sm text-black-lightest">
                İşten arta kalan vakitlerimde ASP.NET Core Teknolojilerinde MVC
                modelinde Web Projeleri Geliştirmekteyim.
              </p>
            </div>
          </div>
        </div>
        {/* Row - Two */}
        {/* <div className="flex flex-col gap-3 md:flex-row md:gap-6 lg:gap-10 mx-auto">
          <div className="rounded-lg border max-w-md">
            <div className="bg-blue-lighest flex justify-between md:gap-2 p-3 lg:p-4">
              <div className="flex flex-col">
                <h4 className="font-semibold lg:text-lg">
                  Ahlatçı Ödeme ve Elektronik Para Hizmetleri
                </h4>
                <span className="text-sm text-black-lightest lg:text-base">
                  Sistem Destek Uzman Yardımcısı
                </span>
                <span className="text-sm text-black-lightest">
                  2023 - Halen
                </span>
              </div>
              <img
                src="/src/assets/images/teachering.svg"
                alt="Bank Card"
                className="w-24 lg:w-28 max-h-[72px]"
              />
            </div>
            <div className="p-3 lg:p-4">
              <p className="text-justify text-sm text-black-lightest">
                İşten arta kalan vakitlerimde ASP.NET Core Teknolojilerinde MVC
                modelinde Web Projeleri Geliştirmekteyim.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experiences;
