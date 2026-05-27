import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import Section04Image from "../../assets/ServiceSection04.png";
import PageSection from "../../components/PageSection";
import Container from "../../components/Container";
import Button from "../../components/Button";
const Section04 = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const textContentRef = useRef(null);
  const buttonRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      // Clean load-in sequence
      tl.fromTo(headerRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(
          textContentRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.5",
        )
        .fromTo(
          buttonRef.current,
          { x: -15, opacity: 0 },
          { x: 0, opacity: 1 },
          "-=0.4",
        )
        .fromTo(
          imageWrapperRef.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 1.2 },
          "-=0.6",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageSection
      ref={containerRef}
      variant="default"
      className="bg-[#F4F4F4] text-[#111111]"
    >
      <Container className="flex flex-col space-y-12 md:space-y-16">
        {/* Full Width Top Header */}
        <h2
          ref={headerRef}
          className="text-4xl md:text-5xl lg:text-[56px] font-medium font-secondary tracking-tight leading-[1.1] text-balance"
        >
          Strategic Legal Thinking for Real World Problems
        </h2>

        {/* Split Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Text Content & Button */}
          <div className="lg:col-span-6 flex flex-col items-start justify-between space-y-8 md:space-y-12">
            <div
              ref={textContentRef}
              className="space-y-6 text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl"
            >
              <p>
                We approach legal matters by breaking them down into clear,
                structured thinking supported by careful research and practical
                understanding. Our focus is to help clients see what matters,
                what risks exist, and what steps make sense in real situations.
              </p>
              <p>
                We work with individuals and businesses across different legal
                needs, offering guidance that is direct, understandable, and
                tailored to the context of each case. Instead of overwhelming
                clients with complexity, we focus on clarity and direction.
              </p>
              <p>
                Every matter is handled with attention to detail and a
                problem-solving mindset, ensuring that the guidance provided is
                not just theoretical, but usable in real decision-making.
              </p>
            </div>

            {/* Premium Interactive Button */}
            <Button
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />}
            >
              Talk to Our Team
            </Button>
          </div>

          {/* Right Column: Desert Dune Graphic Image */}
          <div
            ref={imageWrapperRef}
            className="lg:col-span-6 w-full h-[300px] md:h-[420px] rounded-sm overflow-hidden shadow-sm"
            style={{ willChange: "clip-path" }}
          >
            <img
              src={Section04Image}
              alt="Sculpted desert sand dune landscape representing clarity and direction"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </PageSection>
  );
};

export default Section04;
