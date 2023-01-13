import React from "react";

// Image
import Image from "next/image";

// Footer logo
import FooterLogo from "../../../public/assets/images/userhive_light.svg";

const Footer = () => {
  // getting the current year from the date class
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-full bg-black-900">
      <div className="px-6 py-24 text-white">
        <div className="flex items-center gap-2">
          <Image className="w-10 h-10" src={FooterLogo} alt="Footer logo" />
          <span className="text-lg font-bold">Userhive</span>
        </div>
        <p className="mt-3 text-sm sm:mt-5">
          Copyright © {currentYear} Userhive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
