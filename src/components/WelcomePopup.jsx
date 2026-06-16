import { useState, useEffect, useRef } from "react";
import { X, Award, Shield } from "lucide-react";
import AdvocateMeera from "../assets/AdvocateMeeraMaharjan.png";

const WelcomePopup = ({ isVisible, onClose }) => {
  const [show, setShow] = useState(false);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setShow(true), 20);
      return () => clearTimeout(t);
    }
  }, [isVisible]);

  const handleClose = () => {
    setShow(false);
    closeTimerRef.current = setTimeout(onClose, 400);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[110] flex items-center justify-center transition-all duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      <div
        className={`relative z-10 w-[calc(100%-2rem)] max-w-2xl bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 flex flex-col sm:flex-row ${
          show
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-[0.96] translate-y-4"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200 shadow-sm cursor-pointer"
          aria-label="Close welcome popup"
        >
          <X className="w-4 h-4 text-neutral-700" />
        </button>

        <div className="w-full sm:w-[240px] lg:w-[280px] h-64 sm:h-auto bg-gradient-to-br from-neutral-100 to-neutral-200 flex-shrink-0 overflow-hidden">
          <img
            src={AdvocateMeera}
            alt="Advocate Meera Maharjan — Founder of Liberty Legal Service & Research Center"
            className="w-full h-full object-cover object-top sm:object-cover sm:object-top"
          />
        </div>

        <div className="flex-1 px-6 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-9">
          <p className="text-primary-600 text-xs font-primary tracking-[0.15em] uppercase mb-1">
            Welcome to
          </p>
          <h2 className="text-xl sm:text-2xl font-secondary font-semibold tracking-tight text-neutral-900">
            Liberty Legal Service &amp; Research Center
          </h2>

          <div className="mt-3">
            <p className="text-base sm:text-lg font-secondary font-medium text-neutral-800">
              Advocate Meera Maharjan
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 font-secondary">
              Founder &amp; Legal Consultant
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 text-[11px] sm:text-xs font-secondary font-medium px-2.5 py-1 rounded-full border border-amber-200/60">
              <Award className="w-3 h-3" />
              15+ Years Experience
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-50 text-neutral-700 text-[11px] sm:text-xs font-secondary font-medium px-2.5 py-1 rounded-full border border-neutral-200/80">
              <Shield className="w-3 h-3" />
              Joint Secretary, Lalitpur Bar
            </span>
          </div>

          <p className="mt-4 font-primary text-primary-700 text-lg sm:text-xl italic leading-snug tracking-tight">
            "Justice is Open for Everyone"
          </p>

          <p className="mt-3 text-neutral-600 font-secondary text-xs sm:text-sm leading-relaxed">
            Providing trusted legal counsel, research-driven solutions, and
            professional representation with integrity, expertise, and a deep
            commitment to justice for individuals, families, businesses, and
            institutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
