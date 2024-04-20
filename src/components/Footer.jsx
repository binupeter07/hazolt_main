import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white padding-x p-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © 2024{" "}
            <span className="text-yellowGreen text-xl font-semibold">
              Hazolt
            </span>
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            <Link to={"/"} className="hover:text-gray-400">
              Home
            </Link>
            <Link to={"/products"} className="hover:text-gray-400">
              Products
            </Link>
            <Link to={"/about"} className="hover:text-gray-400">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
