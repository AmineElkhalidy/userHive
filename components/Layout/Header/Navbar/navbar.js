import React, { useState } from "react";

// Component
import Button from "../../../Buttons/button";

// Image
import Image from "next/image";

// Header logo
import UserhiveLogo from "../../../../public/assets/images/userhive_light.svg";

const Navbar = () => {
  // Menu state
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full h-full px-6">
      {/* Logo */}
      <a className="inline-flex items-center gap-3 cursor-pointer">
        <Image src={UserhiveLogo} className="w-7 h-7" alt="" loading="lazy" />
        <span className="text-xl font-bold text-white">Userhive</span>
      </a>

      {/* Mobile Nav */}
      <div className="relative lg:hidden">
        {activeMenu ? (
          <i
            onClick={() => setActiveMenu(false)}
            class="bx bx-x text-[1.6rem] text-white cursor-pointer hover:text-black-300 duration-300"
          ></i>
        ) : (
          <i
            onClick={() => setActiveMenu(true)}
            className="bx bx-menu text-[1.6rem] text-white cursor-pointer hover:text-black-300 duration-300"
          ></i>
        )}

        {activeMenu && (
          <div className="fixed top-[4.4rem] left-6">
            <Button
              href="mailto:tom@userhive.co"
              styles={
                "py-2 px-[18px] bg-[#5E5DF0] rounded-full font-semibold hover:text-[#5E5DF0] hover:bg-white duration-300"
              }
            >
              Let&apos;s go
            </Button>
          </div>
        )}
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:block">
        <Button
          href="mailto:tom@userhive.co"
          styles={
            "py-2 px-[18px] bg-[#5E5DF0] rounded-full font-semibold hover:text-[#5E5DF0] hover:bg-white duration-300"
          }
        >
          Let&apos;s go
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
