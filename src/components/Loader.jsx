import { useState, useEffect, useRef } from "react";

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
const DURATION = 3000;

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
        }, 500);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A] transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
        exiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className=" flex flex-col items-center justify-center gap-6">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-white text-[140px] sm:text-[100px] font-secondary font-light leading-none tabular-nums tracking-tight">
            {count}
          </span>
          <span className="text-white/50 text-3xl sm:text-5xl font-secondary font-light">
            %
          </span>
        </div>
        <p className="text-primary-500 text-xs sm:text-2xl font-primary  uppercase mb-4 sm:mb-6 text-center">
          Liberty Legal Service & <br></br> Research Center
        </p>
      </div>
    </div>
  );
};

export default Loader;
