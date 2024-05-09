import React from "react";
import Bank from "~/assets/images/bank.svg";
import Teachering from "~/assets/images/teachering.svg";

const Experiences = () => {
  return (
    <div
      id="experiences"
      className="p-6 flex flex-col gap-5 lg:max-w-7xl mx-auto scroll-mt-14 md:scroll-mt-16"
    >
      {/* Title */}
      <div>
        <h2 className="font-semibold text-2xl text-center text-black-light">
          Tecrübelerim
        </h2>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-3">
        {/* Row - One */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-6 lg:gap-10 mx-auto ">
          {/* Box - One */}
          <div className="rounded-lg border max-w-md md:max-w-[340px] lg:max-w-[500px] shadow-lg">
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
                Kullanıcıların domain ve fiziksel sistemlerinde yaşadıkları
                sorunlara teknik destek sağlıyor, sunucu yönetimi süreçlerini
                yürütüyor ve frontend yazılım tarafında kapsamlı destek
                sunuyorum.
              </p>
            </div>
          </div>
          {/* Box - Two */}
          <div className="rounded-lg border max-w-md md:max-w-[340px] lg:max-w-[500px] shadow-lg">
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
                Asp.NET Core MVC mimarisi ve React alanında kendimi
                geliştiriyorum ve projelerde aktif rol alıyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
