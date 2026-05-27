import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logowhite from "../assets/logowhite.svg";
import { Send, Menu, X } from "lucide-react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Prevent the navbar from hiding if the mobile menu is active
      if (menuOpen) return;

      // Avoid hiding quirks at the very top of the page
      if (currentScrollY < 10) {
        setShowNavbar(true);
        return;
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* MOBILE MENU OVERLAY (Moved outside the main nav so it doesn't translate away) */}
      <div
        className={`fixed inset-0 bg-black z-50 flex flex-col transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Mobile Header Inside Overlay */}
        <div className="flex items-center justify-between p-4 w-full">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logowhite} alt="Liberty Legal Service Advocate Meera Maharjan logo" className="h-8" />
          </Link>

          <button onClick={() => setMenuOpen(false)} className="text-white p-2">
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Links Container Centered Perfectly */}
        <div className="flex flex-col items-start justify-center mt-10 gap-10  w-screen px-6">
          <Link
            to="/about"
            className="text-slate-600 w-auto text-5xl font-medium font-secondary hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/service"
            className="text-slate-600 w-auto text-5xl font-medium font-secondary hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="text-slate-600 w-auto text-5xl font-medium font-secondary hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <button
            className="flex items-center gap-2 rounded border bg-primary-500 px-6 py-3 text-lg font-medium text-black whitespace-nowrap mt-4"
            onClick={() => {
              setMenuOpen(false);
              const el = document.getElementById('forum');
              if (el) {
                if (window.lenis) window.lenis.scrollTo(el, { offset: -80 });
                else el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Book a Consultation
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-sm transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          {/* LOGO */}
          <Link to="/" className="shrink-0">
            <img
              src={logowhite}
              alt="Liberty Legal Service Advocate Meera Maharjan logo"
              className="cursor-pointer h-8 sm:h-10"
            />
          </Link>

          {/* MOBILE MENU TRIGGER */}
          <button
            className="sm:hidden text-white p-2"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>

          {/* DESKTOP LINKS */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-6 flex-wrap justify-end">
            <Link
              to="/about"
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              About
            </Link>

            <Link
              to="/service"
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              Service
            </Link>

            <Link
              to="/contact"
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>

            {/* CTA BUTTON */}
            <button
              className="flex items-center gap-2 rounded border bg-primary-500 px-3 py-2 text-sm font-medium text-black hover:bg-primary-500 hover:text-black transition-colors duration-300 whitespace-nowrap shrink-0"
              onClick={() => {
                const el = document.getElementById('forum');
                if (el) {
                  if (window.lenis) window.lenis.scrollTo(el, { offset: -80 });
                  else el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book a Consultation
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
