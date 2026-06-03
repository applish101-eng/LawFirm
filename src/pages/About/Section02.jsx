import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageSection from "../../components/PageSection";
import Container from "../../components/Container";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "1,146+", label: "Cases Resolved" },
  { value: "20+", label: "Practice Areas" },
];

const Section02 = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);

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
        headingRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4 },
      ).fromTo(
        statsRef.current?.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
        "-=0.8",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageSection ref={sectionRef} className="bg-[#F5F5F5] ">
      <Container className="flex flex-col items-center py-10 ">
        <p className="text-center font-primary text-sm text-black tracking-wide my-4">
          About Us
        </p>

        <h2
          ref={headingRef}
          className="font-secondary font-medium text-center text-black leading-[1.1] tracking-tight text-2xl lg:text-5xl max-w-6xl"
        >
          Under the leadership of Advocate Meera Maharjan, we provide clear and
          practical legal guidance built on research integrity and trust
        </h2>

        <div className="w-full flex justify-center ">
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-14 lg:mt-28 max-w-6xl "
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center w-full h-auto flex-col gap-2 "
              >
                <p className="font-secondary font-light text-black text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                  {s.value}
                </p>
                <p className="font-secondary text-sm text-black font-normal break-words text-balance text-center ">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </PageSection>
  );
};

export default Section02;
