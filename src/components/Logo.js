import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
     text-lg text-cyan flex items-center mb-14 lg:mb-1
     "
    >
      <span className="flex">
        <img src={logoSvg} alt="CryptoBucks" />
        <span className="mt-2">CryptoBucks</span>
      </span>
    </Link>
  );
};

export default Logo;
