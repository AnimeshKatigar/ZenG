"use client"
import { useState } from "react";

const Navbar = () => {
  const [burgerMenuToggle, setBurgerMenuToggle] = useState(true);

  const HamburgerMenu = () => (
    <label
      className={`burger ${burgerMenuToggle && "burger-open"}`}
      for="burger"
      onClick={() => setBurgerMenuToggle(!burgerMenuToggle)}
    >
      <span></span>
      <span></span>
      <span></span>
    </label>
  );

  return (
    <div className="flex bg-slate-600 py-3">
      <p>logo</p>
      <HamburgerMenu />
      {burgerMenuToggle.toString()}
    </div>
  );
};

export default Navbar;
