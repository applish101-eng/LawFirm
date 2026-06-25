import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";
import SEO from "../../components/SEO";
import Button from "../../components/Button";
import PageSection from "../../components/PageSection";
import Container from "../../components/Container";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What should I consider when choosing a law firm in Nepal?",
    answer:
      "When selecting a law firm, you should consider experience, specialization in relevant practice areas, client track record, and the ability to provide clear and practical legal guidance.",
  },
  {
    question: "What legal services does your firm provide?",
    answer:
      "We provide legal consultation, research, and advisory support across family law, criminal defense, property disputes, corporate law, contracts, intellectual property, and more for both individuals and companies.",
  },
  {
    question: "Which industries do you specialize in serving?",
    answer:
      "We serve clients across a range of industries including real estate, finance, healthcare, technology, hospitality, manufacturing, and non-profit organizations.",
  },
  {
    question: "Do you work with international clients and foreign companies?",
    answer:
      "Yes, we welcome international clients and foreign companies seeking legal guidance in Nepal. We provide support for investment approvals, regulatory compliance, and cross-border legal matters.",
  },
  {
    question: "What types of clients do you typically represent?",
    answer:
      "We represent individuals, families, startups, small and medium enterprises, corporations, and community organizations across a broad spectrum of legal needs.",
  },
  {
    question: "Do you provide online legal consultations?",
    answer:
      "Yes, we offer online legal consultations for clients who prefer remote sessions. Please contact us to schedule a virtual appointment at your convenience.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      tl.fromTo(
        leftRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4 },
      ).fromTo(
        rightRef.current?.children,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        "-=0.8",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Liberty Legal Service & Research Center | Advocate Meera Maharjan"
        description="Find answers to common legal questions in Nepal. Learn about divorce, company registration, property disputes, and more from Advocate Meera Maharjan."
        canonical="https://libertylegal.com.np/faq"
      />
      <PageSection
        ref={sectionRef}
        className="relative bg-[#F5F5F5] select-none py-0 sm:py-24"
      >
        <Container className="flex flex-col gap-6 lg:gap-10">
          <h1 className="text-sm lg:text-base font-primary text-black uppercase tracking-wider font-semibold text-center lg:text-left shrink-0">
            Frequently Asked Questions
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-10 lg:gap-16 w-full">
            <div
              ref={leftRef}
              className="flex flex-col justify-between gap-8 lg:pb-4 shrink-0"
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center lg:text-left font-secondary font-medium text-black leading-tight tracking-tight">
                  Questions we frequently receive from clients & businesses
                </h2>

                <p className="text-sm sm:text-base text-center lg:text-left text-black/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We've answered some of the most common questions about our
                  services, approach, and areas of practice to help you better
                  understand how we work. If you still have a question that
                  isn't covered here, feel free to reach out to our team.
                </p>
              </div>

              <div className="hidden lg:flex flex-col gap-5 items-start">
                <div>
                  <h3 className="text-xl lg:text-2xl font-medium text-black">
                    Need more information?
                  </h3>
                  <p className="text-black/60 text-sm mt-1">
                    Get in touch with our expert legal team today.
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />}
                  onClick={() => {
                    const el = document.getElementById("forum");
                    if (el) {
                      if (window.lenis)
                        window.lenis.scrollTo(el, { offset: -80 });
                      else el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Talk to Our Team
                </Button>
              </div>
            </div>

            <div ref={rightRef} className="flex flex-col gap-4">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`bg-white p-5 sm:p-6 rounded-xl border border-transparent transition-all duration-300 ${
                      isOpen
                        ? "shadow-md border-black/5"
                        : "shadow-sm hover:border-black/10"
                    }`}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                    >
                      <h2
                        className={`text-sm sm:text-md lg:text-lg font-secondary font-medium leading-snug pr-2 flex-1 transition-colors duration-200 ${
                          isOpen
                            ? "text-black"
                            : "text-black/90 group-hover:text-black"
                        }`}
                      >
                        {item.question}
                      </h2>

                      <div
                        className={`border border-slate-200 flex items-center justify-center rounded-full p-2 shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-black border-black text-white"
                            : "bg-transparent text-black"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-[300px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="lg:hidden lg:flex flex-col gap-5 mt-6 items-start">
                <div>
                  <h3 className="text-xl lg:text-2xl font-medium text-black">
                    Need more information?
                  </h3>
                  <p className="text-black/60 text-sm mt-1">
                    Get in touch with our expert legal team today.
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />}
                  onClick={() => {
                    const el = document.getElementById("forum");
                    if (el) {
                      if (window.lenis)
                        window.lenis.scrollTo(el, { offset: -80 });
                      else el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Talk to Our Team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </PageSection>
    </>
  );
};

export default Faq;
