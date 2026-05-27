import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MapPin, Phone, Mail } from "lucide-react";
import Footer from "../components/Footer";
import PageSection from "../components/PageSection";
import Container from "../components/Container";

const Contact = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.fromTo(titleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(
          leftContentRef.current?.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12 },
          "-=0.4",
        )
        .fromTo(
          rightContentRef.current,
          { scale: 1.02, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1 },
          "-=0.6",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageSection
      ref={containerRef}
      variant="large"
      className="bg-[#F4F4F4] text-[#111111]"
    >
      <Container className="flex flex-col space-y-10 md:space-y-12">
        {/* Category Label and Main Heading */}
        <div ref={titleRef} className="flex flex-col space-y-1">
          <span className="text-xs md:text-sm font-medium tracking-wide text-neutral-500 uppercase">
            Contacts
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight font-secondary">
            Get in Touch
          </h2>
        </div>

        {/* Split Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Column */}
          <div
            ref={leftContentRef}
            className="lg:col-span-6 flex flex-col justify-between space-y-12"
          >
            <div className="space-y-4">
              <span className="block text-xs md:text-sm font-medium text-neutral-500">
                Lalitpur
              </span>
              <div className="space-y-3 font-light text-2xl md:text-3xl lg:text-[34px] tracking-tight leading-snug">
                <p className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-neutral-400 stroke-[1.5]" />
                  <span>Near Batukbhairav</span>
                </p>
                <p className="flex items-center gap-3 hover:text-neutral-600 transition-colors">
                  <Phone className="w-6 h-6 text-neutral-400 stroke-[1.5]" />
                  <a href="tel:+9779851227006">+977 9851227006</a>
                </p>
                <p className="flex items-center gap-3 hover:text-neutral-600 transition-colors break-all">
                  <Mail className="w-6 h-6 text-neutral-400 stroke-[1.5]" />
                  <a href="mailto:measmeerasms@gmail.com">
                    measmeerasms@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Separator Line and Social Grid Anchors */}
            <div className="space-y-4 pt-4 border-t border-neutral-300">
              <span className="block text-xs md:text-sm font-medium text-neutral-500">
                Social Network
              </span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-light text-2xl md:text-3xl lg:text-4xl tracking-tight hover:text-blue-600 transition-colors duration-300 group"
              >
                <svg
                  className="w-6 h-6 text-neutral-400 group-hover:text-blue-600 transition-colors stroke-[1.5]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={rightContentRef}
            className="lg:col-span-6 w-full h-[280px] sm:h-[350px] lg:h-auto overflow-hidden rounded-sm shadow-xs min-h-[300px]"
          >
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600"
              alt="Topographic map context layout"
              className="w-full h-full object-cover object-center grayscale-[20%] opacity-90 hover:scale-101 transition-transform duration-500"
            />
          </div>
        </div>
      </Container>
    </PageSection>
  );
};

export default Contact;
