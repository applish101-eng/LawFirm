import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroImage from "../../assets/HeroImage.png";
import { ArrowRight } from "lucide-react";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.4 },
      });

      tl.fromTo(
        imageRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2, ease: "expo.out" },
      )
        .fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=1.4",
        )
        .fromTo(
          taglineRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8",
        )
        .fromTo(
          statsRef.current?.children,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.12 },
          "-=0.6",
        )
        .fromTo(
          ctaRef.current?.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
          "-=0.6",
        );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          gsap.set(imageRef.current, {
            scale: 1 + (1 - self.progress) * 0.08,
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={imageRef}
            src={HeroImage}
            alt="Advocate Meera Maharjan Liberty Legal Service law firm Kathmandu Nepal"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-linear-180 from-black to-40%"></div>
        <div className="absolute inset-0 z-10 bg-linear-15 from-black to-60%"></div>

        <div className="relative z-20 h-full flex flex-col justify-between px-6 pt-25 pb-10">
          <div className="sm:flex justify-end hidden">
            <p
              ref={taglineRef}
              className="max-w-md text-right text-white text-sm font-light font-secondary leading-relaxed"
            >
              Led by Advocate Meera Maharjan, Liberty Legal Service & Research
              Center provides experienced legal counsel, strategic advocacy, and
              research driven solutions for individuals, communities, and
              organizations across Nepal.
            </p>
          </div>

          <div className="flex flex-col gap-5 h-full justify-end">
            <div
              ref={statsRef}
              className="hidden sm:grid lg:flex gap-8 lg:gap-16 sm:grid-cols-2 sm:w-fit items-start"
            >
              <div className="flex flex-col gap-2 text-left sm:col-span-2 lg:col-span-1">
                <h2 className="text-5xl font-light text-white font-secondary">
                  98%
                </h2>
                <p className="text-sm text-white/80">Client Satisfaction</p>
              </div>

              <div className="flex flex-col gap-2 text-left">
                <h2 className="text-5xl font-light text-white font-secondary">
                  1,146+
                </h2>
                <p className="text-sm text-white/80">Cases Resolved</p>
              </div>

              <div className="flex flex-col gap-2 text-left">
                <h2 className="text-5xl font-light text-white font-secondary">
                  20+
                </h2>
                <p className="text-sm text-white/80">Practice Areas</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
              <div className="flex flex-col gap-2 overflow-hidden">
                <h1
                  ref={headingRef}
                  className="max-w-4xl lg:max-w-3xl sm:text-5xl text-2xl font-normal text-white leading-tight font-secondary"
                >
                  Trusted legal guidance in Lalitpur for the lives that matter
                  most.
                </h1>
                <p className="max-w-md text-white text-[12px] font-light font-secondary leading-relaxed sm:hidden">
                  Led by Advocate Meera Maharjan, Liberty Legal Service &
                  Research Center provides experienced legal counsel, strategic
                  advocacy, and research driven solutions for individuals,
                  communities, and organizations across Nepal.
                </p>
              </div>

              <div ref={ctaRef} className="flex flex-col gap-4">
                <Button
                  className="flex justify-between"
                  width="full"
                  variant="primary"
                  size="lg"
                  responsiveVisibility="sm:hidden"
                  iconRight={<Send className="w-4 h-4" />}
                  onClick={() => {
                    const el = document.getElementById("forum");
                    if (el) {
                      if (window.lenis)
                        window.lenis.scrollTo(el, { offset: -80 });
                      else el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Book Consultation
                </Button>

                <Button
                  width="fit"
                  variant="secondary"
                  size="lg"
                  className="
      self-end
      flex

      sm:bg-white/10
      sm:text-white
      sm:border-white/20

      bg-primary-500
      text-black

      hover:bg-primary-600
      sm:hover:bg-white/20
    "
                  iconRight={
                    <ArrowRight className="flex item-center justify-items-center w-5 h-5 sm:w-7 sm:h-7" />
                  }
                  iconRightClassName="
      bg-white/10
      text-white
      p-2
      sm:p-4
      rounded-sm
      transition-colors
      duration-300
    "
                  onClick={() => navigate("/about")}
                >
                  Our Story
                </Button>

                <p className="text-white/80 text-md hidden sm:block font-light font-secondary">
                  15+ years of legal excellence in Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="sm:hidden bg-black h-screen text-white px-10 py-10 grid grid-cols-2 gap-8 place-content-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-light font-secondary">98%</h2>
          <p className="text-sm text-white/80">Client Satisfaction</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-light font-secondary">1,146+</h2>
          <p className="text-sm text-white/80">Cases Resolved</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-light font-secondary">20+</h2>
          <p className="text-sm text-white/80">Practice Areas</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-light font-secondary">15+</h2>
          <p className="text-sm text-white/80">Years of Excellence</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
