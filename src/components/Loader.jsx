import { useState, useEffect, useRef } from "react";

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
const DURATION = 3200; // Slightly elongated for a more cinematic feel

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = easeOutQuart(progress);
      const value = Math.round(eased * 100);

      setCount(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => onCompleteRef.current(), 900);
        }, 600);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#090909] transition-all duration-[1000ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        exiting
          ? "opacity-0 invisible pointer-events-none"
          : "opacity-100 visible"
      }`}
    >
      {/* Editorial Content Frame */}
      <div className="w-full h-full relative flex flex-col justify-center items-center px-6 select-none">
        {/* --- CENTER BRANDING (High-Fashion Editorial Typography) --- */}
        <div
          className={`flex flex-col items-center transition-all duration-1000 ease-out ${exiting ? "scale-95 opacity-0 y-[-20px]" : "scale-100 opacity-100"}`}
        >
          <h1 className="font-serif italic font-light text-white text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center leading-none">
            Liberty Legal Service <br></br> and Research Center
          </h1>
          <p className="font-sans text-neutral-500 text-[9px] sm:text-2xl  mt-4 text-center ml-[0.45em]">
            Justice is open for everyone
          </p>
        </div>

        {/* --- THE VOGUE BOTTOM PROGRESS CONTAINER --- */}
        <div
          className={`absolute bottom-12 left-8 right-8 md:bottom-16 md:left-16 md:right-16 flex flex-col gap-3 transition-all duration-[800ms] delay-100 ${
            exiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Top Metadata Row */}
          <div className="flex justify-between items-baseline text-neutral-500 font-sans text-[10px] tracking-[0.2em] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-neutral-600 animate-pulse" />
              <span>System Archive Init</span>
            </div>
            <div className="font-medium text-white tabular-nums">
              {count.toString().padStart(3, "0")}{" "}
              <span className="text-neutral-600 text-[9px] font-light font-serif italic ml-0.5">
                %
              </span>
            </div>
          </div>

          {/* Hairline Progress Bar */}
          <div className="w-full h-[1px] bg-neutral-900 relative">
            <div
              className="absolute top-0 left-0 h-full bg-neutral-200 will-change-[width] transition-all duration-75 ease-out"
              style={{ width: `${count}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
