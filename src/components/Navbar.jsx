"use client";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import logoWhite from "../../public/assets/logos/LogoWhiteBg.png";
import logoBlack from "../../public/assets/logos/LogoBlackBg.png";
import Image from "next/image";
import Link from "next/link";
import BagIcon from "../../public/assets/icons/BagWhite.svg";
import CartMenu from "./Layovers/CartMenu";

const Navbar = () => {
  const pathname = usePathname();
  const [burgerMenuToggle, setBurgerMenuToggle] = useState(false);
  const navbarVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0, duration: 1.5, type: "just" },
    },
    hidden: { y: "-100%", opacity: 0 },
  };
  const routes = [
    { label: "Shop", path: "/shop" },
    { label: "Collections", path: "/collections" },
  ];

  const checkActiveRoute = (path) => {
    return pathname.includes(path);
  };

  return (
    <motion.nav
      // animate="visible"
      // variants={navbarVariants}
      // initial="hidden"
      className={`md:justify-between navbar-darkBg px-[3rem] flex items-center sm:py-[1rem] sm:max-lg:py-3 max-lg:px-[1.25rem] max-sm:py-1 max-sm:h-[56px] fixed w-screen z-[5] top-0 font-GothamMedium h-[70px]`}
    >
      <div className="md:hidden">
        <Hamburger
          direction="left"
          toggled={burgerMenuToggle}
          toggle={setBurgerMenuToggle}
          color="white"
          hideOutline={true}
        />
      </div>
      <Link href="/">
        <Image src={logoBlack} alt="logo-dark" className="h-16 w-16" />
      </Link>
      <div className="hidden md:flex items-center gap-x-3 h-full">
        {routes.map((val) => (
          <Link
            key={val.path}
            href={val.path}
            className={`text-white hover:border-b transition-all ${checkActiveRoute(val.path) && "border-b"}`}
          >
            {val.label}
          </Link>
        ))}
      </div>
      <div>
        <CartMenu
          triggerComponent={() => (
            <Image
              src={BagIcon}
              className="hover:scale-110 transition-all duration-200 cursor-pointer"
              alt="cart"
            />
          )}
          closeComponent={() => <div>CLOSE THIS COMPONENT</div>}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
