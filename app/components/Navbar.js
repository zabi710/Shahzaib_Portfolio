"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-sm text-white border-b border-white/6">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold text-white/90 hover:text-white transition-colors">
          Shahzaib<span className="text-primary ml-1">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {/* Underline animation */}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${
                    isActive ? "w-full" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
          
          {/* CTA Button */}
          <a
            href="/contact"
            className="ml-4 px-4 py-2 rounded-lg bg-primary text-black/10 hover:bg-primary/90 text-white font-medium transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-0.5 bg-white/70 transition-transform duration-200 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-full h-0.5 bg-white/70 transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-full h-0.5 bg-white/70 transition-transform duration-200 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/50 border-t border-white/6 px-4 pb-4 animate-slideInDown">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${idx * 0.1}s` }}
                className={`block py-2 px-3 rounded-lg mb-2 font-medium transition-colors duration-200 ${isActive ? "bg-white/6 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="/contact"
            className="block w-full mt-4 px-4 py-2 rounded-lg bg-primary text-white font-medium transition-colors duration-200 text-center"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
