import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logowhite from "../assets/logowhite.svg";
import logoblack from "../assets/logoblack.svg";
import { Send, Menu, X } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(
    () => window.scrollY > window.innerHeight - 50,
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsPastHero(currentScrollY > window.innerHeight - 50);

      // Prevent the navbar from toggling if mobile menu is open or an input is focused
      // (avoids navbar popping up when virtual keyboard opens on mobile)
      const activeEl = document.activeElement;
      const isInputFocused =
        activeEl &&
        (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA");

      if (menuOpen || isInputFocused) {
        setLastScrollY(currentScrollY);
        return;
      }

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

  const isLight = !isHome || isPastHero;

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
            <img
              src={logowhite}
              alt="Liberty Legal Service Advocate Meera Maharjan logo"
              className="h-8"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white p-2 cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Links Container Centered Perfectly */}
        <div className="flex flex-col items-start justify-center mt-10 gap-10 w-full px-6">
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

          <Link
            to="/gallery"
            className="text-slate-600 w-auto text-5xl font-medium font-secondary hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>

          <button
            className="flex items-center gap-2 rounded border bg-primary-500 px-6 py-3 text-lg font-medium text-black whitespace-nowrap mt-4 cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              const el = document.getElementById("forum");
              if (el) {
                if (window.lenis) window.lenis.scrollTo(el, { offset: -70 });
                else el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Book Consultation
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
          isLight ? "bg-[#F5F5F5]" : "bg-black/80"
        } transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          {/* LOGO */}
          <Link to="/" className="shrink-0">
            <img
              src={isLight ? logoblack : logowhite}
              alt="Liberty Legal Service Advocate Meera Maharjan logo"
              className="cursor-pointer h-8 sm:h-10"
            />
          </Link>

          {/* MOBILE MENU TRIGGER */}
          <button
            className={`sm:hidden p-2 transition-all duration-300 cursor-pointer ${isLight ? "text-black" : "text-white"}`}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>

          {/* DESKTOP LINKS */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-6 flex-wrap justify-end">
            <Link
              to="/about"
              className={`transition-colors duration-300 ${isLight ? "text-slate-600 hover:text-black" : "text-gray-300 hover:text-white"}`}
            >
              About
            </Link>

            <Link
              to="/service"
              className={`transition-colors duration-300 ${isLight ? "text-slate-600 hover:text-black" : "text-gray-300 hover:text-white"}`}
            >
              Service
            </Link>

            <Link
              to="/contact"
              className={`transition-colors duration-300 ${isLight ? "text-slate-600 hover:text-black" : "text-gray-300 hover:text-white"}`}
            >
              Contact
            </Link>

            <Link
              to="/gallery"
              className={`transition-colors duration-300 ${isLight ? "text-slate-600 hover:text-black" : "text-gray-300 hover:text-white"}`}
            >
              Gallery
            </Link>

            {/* CTA BUTTON */}
            <button
              className="flex items-center gap-2 rounded  bg-primary-500 px-3 py-2 text-sm font-medium text-black hover:bg-primary-500 hover:text-black transition-colors duration-300 whitespace-nowrap shrink-0 cursor-pointer"
              onClick={() => {
                const el = document.getElementById("forum");
                if (el) {
                  if (window.lenis) window.lenis.scrollTo(el, { offset: 1 });
                  else el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book Consultation
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
