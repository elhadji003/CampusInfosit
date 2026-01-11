import React, { useState } from "react";
import { Link } from "react-router-dom"; // Si tu utilises React Router
import { Menu, X, User, LogIn, User2, Contact2 } from "lucide-react"; // npm install lucide-react
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Acceuil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Filières", href: "/filieres" },
    { name: "Administration", href: "/administration" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-emerald-700/90 backdrop-blur-md border-b border-emerald-600/30 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3 md:px-6">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="CampusInfosits Logo"
            className="h-12 w-12 bg-white p-1 rounded-full shadow-inner object-contain"
          />
          <span className="font-extrabold text-2xl tracking-tight hidden sm:block">
            Campus<span className="text-emerald-200">Infosits</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-emerald-200 transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-200 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Buttons section */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex lg:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-md">
            <LogIn size={18} />
            <span className="sm:inline">Connexion</span>
          </button>

          <Link
            to={"/alumni"}
            className="hidden md:flex lg:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-md"
          >
            <span className="hidden sm:inline">
              <User2 />
            </span>
            <span className="hidden sm:inline">Alumnie</span>
          </Link>

          <Link
            to={"/contact"}
            className="hidden md:flex lg:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-md"
          >
            <span>
              <Contact2 />
            </span>
            <span className="hidden sm:inline">Nous Contactez</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-emerald-600 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-emerald-800 border-t border-emerald-600 ${
          isOpen ? "max-height-screen p-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium py-2 border-b border-emerald-700/50 hover:text-emerald-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center gap-3 mt-6">
          <button className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-md">
            <LogIn size={18} />
            <span className="hidden sm:inline">Connexion</span>
          </button>

          <Link
            to={"/alumni"}
            className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-md"
          >
            <span>
              <User2 />
            </span>
            <span>Alumnie</span>
          </Link>

          <Link
            to={"/contact"}
            className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-md"
          >
            <span className="hidden sm:inline">
              <Contact2 />
            </span>
            <span className="">Nous Contactez</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
