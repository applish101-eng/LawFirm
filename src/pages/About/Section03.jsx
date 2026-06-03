import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section03Image from "../../assets/ServiceSection03.png";
import PageSection from "../../components/PageSection";
import Container from "../../components/Container";

gsap.registerPlugin(ScrollTrigger);

const Section03 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      tl.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4 },
      ).fromTo(
        imageRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6 },
        "-=0.8",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageSection ref={sectionRef} variant="large" className="bg-[#F4F4F4] text-[#111111]">
      <Container className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start pb-12 lg:pb-20">
        <div
          ref={textRef}
          className="w-full lg:w-[60%] flex flex-col items-start gap-4"
        >
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-sm border border-neutral-300 shadow-sm text-xs md:text-sm font-medium tracking-wide">
            <span>Professionalism with Purpose</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] text-balance">
            The Foundation of Trust Behind Our Legal Practice
          </h1>
        </div>

        <div className="w-full lg:w-[40%] flex flex-col gap-4 text-sm md:text-base text-black leading-relaxed">
          <p>
            We believe legal guidance should feel clear, practical, and
            approachable rather than overwhelming or difficult to understand.
            Every matter deserves careful attention, honest communication, and
            reliable legal support built on trust.
          </p>

          <p>
            Through research, professional integrity, and a client-focused
            approach, we support individuals and businesses with dependable,
            responsible, and genuinely human guidance.
          </p>
        </div>
      </Container>

      <div ref={imageRef} className="w-full relative min-h-[350px] md:min-h-[500px] overflow-hidden">
        <img
          src={Section03Image}
          alt="Legal Practice"
          className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
        />
      </div>
    </PageSection>
  );
};

export default Section03;
