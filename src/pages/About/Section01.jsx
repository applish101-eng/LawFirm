import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section01Service from "../../assets/ServiceSection01.png";
import PageSection from "../../components/PageSection";
import Container from "../../components/Container";

gsap.registerPlugin(ScrollTrigger);

const Section01 = () => {
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
    <PageSection ref={sectionRef} className="bg-[#F5F5F5]">
      <Container className="flex flex-col gap-3 lg:gap-20 lg:flex-row">
        <div ref={textRef} className="flex-2 flex flex-col gap-1 lg:gap-4">
          <h2 className="font-primary text-black text-md font-medium">
            About Us
          </h2>
          <h1 className="font-secondary text-3xl sm:text-3xl lg:text-6xl font-medium leading-tight">
            Every situation deserves thoughtful guidance.
          </h1>
        </div>

        <div className="flex-1 flex flex-col justify-end items-end gap-3">
          <p className="text-black font-secondary text-base sm:text-sm leading-relaxed max-w-md lg:text-right">
            We begin every consultation by taking the time to truly understand
            your situation, so we can provide clear, practical, and thoughtful
            legal guidance tailored to your needs.
          </p>

          <a
            href="#"
            className="font-primary flex gap-2 text-sm text-black transition-colors duration-300 w-fit"
          >
            <span>-</span>
            <p className="underline font-secondary">Advocate Meera Maharjan</p>
          </a>
        </div>
      </Container>

      <div ref={imageRef} className="w-full mt-12 h-64 sm:h-96 overflow-hidden">
        <img
          src={Section01Service}
          alt="Advocate Meera Maharjan Liberty Legal Service law office Kathmandu Nepal"
          className="w-full h-full object-cover will-change-transform"
        />
      </div>
    </PageSection>
  );
};

export default Section01;
