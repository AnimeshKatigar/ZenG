"use client";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import logoWhite from "../../public/assets/logos/LogoWhiteBg.png"
import logoBlack from "../../public/assets/logos/LogoBlackBg.png"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [burgerMenuToggle, setBurgerMenuToggle] = useState(true);
  const navbarVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0, duration: 1.5, type: "just" },
    },
    hidden: { y: "-100%", opacity: 0 },
  };

  return (
    <motion.div
      // animate="visible"
      // variants={navbarVariants}
      // initial="hidden"
      className={`${
        // bg
        //   ? "sm:bg-black navbar-darkBg"
        //   : scrollPosition >= windowHeight - 30 ?
        "navbar-darkBg"
        // : "navbar-bg"
      } px-[3rem] flex items-center sm:py-[1rem] sm:max-lg:py-3 max-lg:px-[1.25rem] max-sm:py-1 max-sm:h-[56px] fixed w-screen z-[5] top-0 font-GothamMedium h-[70px]`}
    >
      <Image src={logoBlack} alt="logo-dark" className="h-16 w-16"/>
      <Link href="/shop/all" className="text-white border-b">SHOP</Link>
      <Hamburger
        direction="left"
        toggled={burgerMenuToggle}
        toggle={setBurgerMenuToggle}
        color="white"
        hideOutline={true}
      />
    </motion.div>
  );
};

export default Navbar;
