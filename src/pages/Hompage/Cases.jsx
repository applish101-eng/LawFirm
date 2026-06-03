import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CasesImage from "../../assets/Cases.png";
import { ArrowRight } from "lucide-react";
import PageSection from "../../components/PageSection";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    title: "Property Dispute Resolved",
    description:
      "Complex property ownership dispute involving conflicting land documents. Through detailed legal research and court advocacy, secured a favorable judgment restoring the client's rightful ownership.",
  },
  {
    title: "Property Dispute Resolved",
    description:
      "Complex property ownership dispute involving conflicting land documents. Through detailed legal research and court advocacy, secured a favorable judgment restoring the client's rightful ownership.",
  },
  {
    title: "Property Dispute Resolved",
    description:
      "Complex property ownership dispute involving conflicting land documents. Through detailed legal research and court advocacy, secured a favorable judgment restoring the client's rightful ownership.",
  },
  {
    title: "Property Dispute Resolved",
    description:
      "Complex property ownership dispute involving conflicting land documents. Through detailed legal research and court advocacy, secured a favorable judgment restoring the client's rightful ownership.",
  },
];

const Cases = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);

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
        imageRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1 },
      )
        .fromTo(
          textRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.6",
        )
        .fromTo(
          cardsRef.current?.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
          "-=0.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageSection ref={sectionRef} className="bg-[#F5F5F5]">
      <div ref={imageRef} className="w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={CasesImage}
          alt="Cases Background"
          className="w-full h-full object-cover will-change-transform"
        />
      </div>

      <div ref={textRef} className="py-10 px-6 max-w-8xl mx-auto">
        <h1 className="text-black font-primary text-xl">Our Cases</h1>
        <p className="w-full text-black/80 font-secondary font-medium text-3xl sm:text-6xl mt-3 sm:leading-[1.1]">
          See how justice <br />was achieved in real cases.
        </p>
      </div>

      <div
        ref={cardsRef}
        className="pb-10 px-6 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {cases.map((c, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-md min-h-[220px] flex flex-col items-end gap-12"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl">{c.title}</h2>
              <p className="text-md">{c.description}</p>
            </div>
            <div className="border border-slate-400 w-12 h-12 flex items-center justify-center rounded-sm">
              <ArrowRight />
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Cases;
