import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import Services from "./Hompage/Services";
import Footer from "../components/Footer";

const ServicesHero = () => {
  const containerRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const lineRef = useRef(null);
  const arrowBoxRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      // Staged sophisticated entry sequence
      tl.fromTo(
        [textLeftRef.current, textRightRef.current],
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, 用stagger: 0.15 },
      )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, transformOrigin: "left center", duration: 1.1 },
          "-=0.6",
        )
        .fromTo(
          arrowBoxRef.current,
          { y: -15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.5",
        )
        .fromTo(
          imageContainerRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=0.7",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full  bg-[#F4F4F4] text-[#111111] font-sans antialiased overflow-hidden pt-32 "
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col">
        {/* Top Header Row split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end pb-8">
          {/* Left Side: Category Label & Large Title */}
          <div
            ref={textLeftRef}
            className="lg:col-span-7 flex flex-col space-y-2"
          >
            <span className="text-xs md:text-sm font-medium tracking-wide text-neutral-500 uppercase">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Our Legal Services
            </h1>
          </div>

          {/* Right Side: Description */}
          <div ref={textRightRef} className="lg:col-span-5 lg:pb-1">
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-md">
              We work closely with individuals and businesses to address three
              core legal needs: consultation, research, and advisory support.
            </p>
          </div>
        </div>

        {/* Divider Line & Action Button Row */}
        <div className="relative w-full flex items-center mb-12 md:mb-16">
          {/* Animated border line across */}
          <div
            ref={lineRef}
            className="flex-grow h-[1px] bg-neutral-400/80 transform will-change-transform"
          />

          {/* Square Anchor Arrow Box */}
          <div
            ref={arrowBoxRef}
            className="flex-shrink-0 border border-neutral-400/80 p-3.5 bg-transparent ml-4 rounded-xs transition-colors duration-300 hover:bg-neutral-200/50 cursor-pointer group"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight * 0.85,
                behavior: "smooth",
              })
            }
          >
            <ArrowDown className="w-5 h-5 text-neutral-800 transform group-hover:translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>

        {/* Main Hero Historical Still Image Context */}
        <div
          ref={imageContainerRef}
          className="w-full h-[380px] md:h-[540px] overflow-hidden rounded-xs shadow-xs relative"
        >
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000"
            alt="Antique legal validation office stamps and ink paperwork documents table context"
            className="w-full h-full object-cover object-center transform scale-100 hover:scale-102 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
      <Services />
      <Footer />
    </section>
  );
};

export default ServicesHero;
