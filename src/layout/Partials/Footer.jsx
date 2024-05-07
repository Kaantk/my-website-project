import React from "react";
import MediaIcons from "~/components/MediaIcons";

const Footer = () => {
  return (
    <>
      <div className="text-center py-5 px-2 md:px-0 text-black-light">
        <h4 className="text-xl font-semibold">Kaan Tetik</h4>
        <p className="font-normal">FRONTEND JUNIOR DEVELOPER</p>
        <div className="flex justify-center">
          <MediaIcons />
        </div>
        <p className="text-black-lightest text-sm">© kaan.tk3@gmail.com</p>
        <div className="mt-2">
          <span className="text-black-lightest text-sm">Design - </span>
          <span className="text-sm text-black-light font-semibold">
            Bu site Kaan Tetik tarafından React ile hazırlanmıştır.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
