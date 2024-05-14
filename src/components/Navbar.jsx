/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../assets/image/logo.webp";
import Wrapper from "../assets/wrappers/Navbar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Wrapper>
      <nav className="bg-gray-50 p-4 shadow-xl" id="home">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="" className="logo" onClick={goToHome} />
          <div className="lg:flex hidden space-x-4 font-bold">
            <a
              href="#about"
              className="text-biru-uhamka hover:text-blue-700 flex items-center"
            >
              Tentang Kami
            </a>
            <a
              href="#layanan"
              className="text-biru-uhamka hover:text-blue-700 flex items-center"
            >
              Layanan
            </a>
            <a
              href="#fasilitas"
              className="text-biru-uhamka hover:text-blue-700 flex items-center"
            >
              Fasilitas
            </a>
            <a
              href="#contact"
              className="text-biru-uhamka hover:text-blue-700 flex items-center"
            >
              Kontak
            </a>
            <Link to={"/login"}>
              <button className="bg-biru-uhamka hover:bg-blue-700 text-white  font-bold py-1 px-7 rounded-full">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="bg-white outline outline-2 outline-biru-uhamka hover:bg-blue-100 text-biru-uhamka font-bold py-1 px-7 rounded-full">
                Register
              </button>
            </Link>
          </div>

          {/* Hamburger menu button */}
          <div className="lg:hidden">
            <button
              className="text-biru-uhamka hover:text-blue-700 focus:outline-none mt-2"
              onClick={toggleDropdown}
            >
              <RxHamburgerMenu className="text-2xl" />{" "}
              {/* Unicode character for three horizontal bars */}
            </button>
          </div>

          {/* Dropdown menu content */}
          {isDropdownOpen && (
            <div className="lg:hidden absolute top-[72px] left-0 w-full bg-white border-b border-gray-200">
              <div className="container p-4">
                <div className="flex justify-end">
                  <button
                    className="text-biru-uhamka hover:text-blue-500 focus:outline-none"
                    onClick={closeDropdown}
                  >
                    <MdClose className="text-2xl" />
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <a
                    href="#home"
                    className="text-biru-uhamka hover:text-blue-700"
                    onClick={closeDropdown}
                  >
                    Beranda
                  </a>
                  <a
                    href="#informasi"
                    className="text-biru-uhamka hover:text-blue-700"
                    onClick={closeDropdown}
                  >
                    Informasi
                  </a>
                  <a
                    href="#kegiatan"
                    className="text-biru-uhamka hover:text-blue-700"
                    onClick={closeDropdown}
                  >
                    Kegiatan
                  </a>
                  <a
                    href="#kontak"
                    className="text-biru-uhamka hover:text-blue-700"
                    onClick={closeDropdown}
                  >
                    Kontak
                  </a>
                  <Link to="/login" onClick={closeDropdown}>
                    <button className="bg-biru-uhamka hover:bg-blue-700 text-white font-bold py-1 px-7 rounded-full">
                      Login
                    </button>
                  </Link>
                  <Link to={"/register"}>
                    <button className="bg-white outline outline-2 outline-biru-uhamka hover:bg-blue-100 text-biru-uhamka font-bold py-1 px-7 rounded-full">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
