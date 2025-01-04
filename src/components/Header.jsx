import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import backgroundImage from "../assets/raws/5.svg";

const Header = () => {
  // State hooks for managing component state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "It's all bout lorem" },
    { id: "contact", label: "Contact" },
  ];

  // Toggle functions for menu and search
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo setActiveLink={setActiveLink} />

          {/* Desktop Navigation */}
          <DesktopNav
            navLinks={navLinks}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />

          {/* Desktop Actions */}
          <DesktopActions toggleSearch={toggleSearch} />

          {/* Mobile Menu Button */}
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

          <button className="fixed right-5 bottom-5 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 transform hover:scale-105">
            Lern uns kennen
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && <SearchBar />}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenu
            navLinks={navLinks}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
      </div>
    </header>
  );
};

// Logo Komponente
const Logo = ({ setActiveLink }) => (
  <div className="flex-shrink-0">
    <img
      className="max-h-20 w-auto cursor-pointer"
      src={backgroundImage} // Verwende den Import statt relativen Pfad
      alt="Spiritual Logo"
      onClick={() => setActiveLink("home")}
    />
  </div>
);

const DesktopNav = ({ navLinks, activeLink, setActiveLink }) => (
  <nav className="hidden md:flex items-center space-x-8">
    {navLinks.map((link) => (
      <button
        key={link.id}
        onClick={() => setActiveLink(link.id)}
        className={`text-lg font-medium transition-colors duration-200 ${
          activeLink === link.id
            ? "text-purple-700 border-b-2 border-purple-700"
            : "text-gray-600 hover:text-purple-600"
        }`}
      >
        {link.label}
      </button>
    ))}
  </nav>
);

const DesktopActions = ({ toggleSearch }) => (
  <div className="hidden md:flex items-center space-x-4">
    <button
      onClick={toggleSearch}
      className="p-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
    >
      <FaSearch className="h-5 w-5" />
    </button>
  </div>
);

const MobileMenuButton = ({ isMenuOpen, toggleMenu }) => (
  <div className="md:hidden">
    <button
      onClick={toggleMenu}
      className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
    >
      {isMenuOpen ? (
        <FaTimes className="h-6 w-6" />
      ) : (
        <FaBars className="h-6 w-6" />
      )}
    </button>
  </div>
);

const SearchBar = () => (
  <div className="py-4 border-t border-gray-200">
    <div className="relative max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500"
      />
      <FaSearch className="absolute right-4 top-3 text-gray-400" />
    </div>
  </div>
);

const MobileMenu = ({ navLinks, activeLink, setActiveLink, setIsMenuOpen }) => (
  <div className="md:hidden py-4 border-t border-gray-200">
    <div className="flex flex-col space-y-4">
      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => {
            setActiveLink(link.id);
            setIsMenuOpen(false);
          }}
          className={`text-lg font-medium transition-colors duration-200 ${
            activeLink === link.id
              ? "text-purple-700"
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          {link.label}
        </button>
      ))}
    </div>
  </div>
);

export default Header;
