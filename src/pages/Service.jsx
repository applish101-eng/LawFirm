import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import SEO from "../components/SEO";
import Services from "./Hompage/Services";
import Footer from "../components/Footer";
import PageSection from "../components/PageSection";
import Container from "../components/Container";
import ImageService from "../assets/MainServiceImage.png";

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

      tl.fromTo(
        [textLeftRef.current, textRightRef.current],
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15 },
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
    <>
      <SEO
        title="Legal Services Nepal | Corporate & Civil Law | Advocate Meera Maharjan"
        description="Full-service legal firm in Kathmandu, Nepal led by Advocate Meera Maharjan. Corporate law, civil litigation, criminal defense, property disputes, and more."
        canonical="https://libertylegalnepal.com/service"
      />
      <PageSection
        ref={containerRef}
        variant="large"
        className="bg-[#F4F4F4] text-[#111111]"
      >
      <Container className="flex flex-col">
        {/* Top Header Row split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end pb-8">
          {/* Left Side: Category Label & Large Title */}
          <div
            ref={textLeftRef}
            className="lg:col-span-7 flex flex-col space-y-2"
          >
            <span className="text-xs md:text-sm font-medium font-primary text-black ">
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
          <div
            ref={lineRef}
            className="flex-grow h-[1px] bg-neutral-400/80 transform will-change-transform"
          />

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
      </Container>

      {/* Main Hero Historical Still Image Context — full bleed, no padding */}
      <div
        ref={imageContainerRef}
        className="w-full h-[380px] md:h-[540px] overflow-hidden rounded-xs shadow-xs"
      >
        <img src={ImageService} alt="Legal services Kathmandu Nepal Advocate Meera Maharjan Liberty Legal" className="w-full h-full object-cover" />
      </div>
      <Services />
      <Footer />
    </PageSection>
    </>
  );
};

export default ServicesHero;
