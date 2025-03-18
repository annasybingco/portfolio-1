import logo from "../assets/icons/logo.svg";
import "../styles/Navbar.scss";
import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="">
      <div>
        <div className="navbar">
          <a href="#home">
            <img src={logo} alt="Anna Sybingco Logo" className="logo" />
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hove: text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove: text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#resume"
              className="text-gray-300 hove: text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
