"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CustomNavbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-800 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand (falls gewünscht) */}
          <div className="flex-shrink-0">
            {/* Hier könnte ein Logo hin */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ml-auto">
            <div className="flex items-baseline space-x-8">
              <Link
                href={isHomePage ? "#home" : "/#home"}
                className="text-white hover:text-amber-400 px-3 py-2 text-sm font-bold transition-colors duration-200 hover:underline hover:decoration-amber-400 hover:underline-offset-4 hover:decoration-2"
              >
                HOME
              </Link>
              <Link
                href={isHomePage ? "#about" : "/#about"}
                className="text-white hover:text-amber-400 px-3 py-2 text-sm font-bold transition-colors duration-200 hover:underline hover:decoration-amber-400 hover:underline-offset-4 hover:decoration-2"
              >
                ÜBER MICH
              </Link>
              <Link
                href={isHomePage ? "#projects" : "/#projects"}
                className="text-white hover:text-amber-400 px-3 py-2 text-sm font-bold transition-colors duration-200 hover:underline hover:decoration-amber-400 hover:underline-offset-4 hover:decoration-2"
              >
                PROJEKTE
              </Link>
              <Link
                href="/lebenslauf"
                className="text-white hover:text-amber-400 px-3 py-2 text-sm font-bold transition-colors duration-200 hover:underline hover:decoration-amber-400 hover:underline-offset-4 hover:decoration-2"
              >
                LEBENSLAUF
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-400 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* X Icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700">
            <Link
              href={isHomePage ? "#home" : "/#home"}
              onClick={closeMenu}
              className="text-white hover:text-amber-400 hover:bg-slate-700 block px-3 py-2 text-base font-bold transition-colors duration-200 rounded-md"
            >
              HOME
            </Link>
            <Link
              href={isHomePage ? "#about" : "/#about"}
              onClick={closeMenu}
              className="text-white hover:text-amber-400 hover:bg-slate-700 block px-3 py-2 text-base font-bold transition-colors duration-200 rounded-md"
            >
              ÜBER MICH
            </Link>
            <Link
              href={isHomePage ? "#projects" : "/#projects"}
              onClick={closeMenu}
              className="text-white hover:text-amber-400 hover:bg-slate-700 block px-3 py-2 text-base font-bold transition-colors duration-200 rounded-md"
            >
              PROJEKTE
            </Link>
            <Link
              href="/lebenslauf"
              onClick={closeMenu}
              className="text-white hover:text-amber-400 hover:bg-slate-700 block px-3 py-2 text-base font-bold transition-colors duration-200 rounded-md"
            >
              LEBENSLAUF
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
