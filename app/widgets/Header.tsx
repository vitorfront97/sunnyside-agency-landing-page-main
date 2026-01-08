"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const lockScroll = () => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.dataset.scrollY = scrollY.toString();
  };

  const unlockScroll = () => {
    const scrollY = document.body.dataset.scrollY;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
    }
  };

  useEffect(() => {
    if (openMenu) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return unlockScroll;
  }, [openMenu]);

  return (
    <header className="py-8 px-6 h-[80vh] flex flex-col items-center gap-24 relative bg-[url(/mobile/image-header.jpg)] bg-no-repeat bg-top bg-cover sm:bg-[url(/desktop/image-header.jpg)] md:h-screen md:bg-bottom lg:px-12">
      <div className="w-full flex items-center justify-between relative">
        <Image
          className="my-[17.5] h-auto w-auto"
          src="logo.svg"
          width={0}
          height={0}
          alt="Sunnyside home"
        />
        <Image
          onClick={() => setOpenMenu((o) => !o)}
          className="h-auto w-auto relative z-20 cursor-pointer md:hidden"
          src="icon-hamburger.svg"
          width={0}
          height={0}
          alt="Sunnyside home"
        />
        <nav
          className={`
          py-10
          absolute
          top-24
          right-0
          left-0
          bg-this-white
          before:content-['']
          before:absolute
          before:-top-7
          before:right-0
          before:h-8
          before:w-8
          before:bg-this-white
          before:[clip-path:polygon(100%_0,0_100%,100%_100%)]
          ${openMenu ? "translate-y-0" : "-translate-y-110"}
          transition-transform
          durantion-400
          md:hidden
          `}
        >
          <ul className="flex flex-col items-center gap-6 text-this-grey-550 font-[barlow]">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li className="py-4 px-10 bg-this-yellow-500 rounded-4xl text-this-grey-950 font-[fraunces]">
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-12 font-[barlow]">
            <li>
              <a href="#" className="text-this-white hover:text-this-grey-950">About</a>
            </li>
            <li>
              <a href="#" className="text-this-white hover:text-this-grey-950">Services</a>
            </li>
            <li>
              <a href="#" className="text-this-white hover:text-this-grey-950">Projects</a>
            </li>
            <li className="py-4 px-10 bg-this-white rounded-4xl text-this-grey-950 font-[fraunces] cursor-pointer hover:text-this-white hover:bg-this-white/50">
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="text-this-h1/tight text-this-white tracking-widest text-center">
        WE ARE CREATIVES
      </h1>
      <Image
        className="-mt-12 h-auto w-auto"
        src="icon-arrow-down.svg"
        width={0}
        height={0}
        alt=""
      />
    </header>
  );
}
