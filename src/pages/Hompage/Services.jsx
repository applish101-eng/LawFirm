import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesImage from "../../assets/ServicesImage.png";
import { ArrowRight } from "lucide-react";
import Button from "../../components/Button";

gsap.registerPlugin(ScrollTrigger);

const individualServices = [
  {
    title: "Family & Personal Law",
    description:
      "Legal guidance for family disputes, personal rights, and civil matters.",
    number: "01",
  },
  {
    title: "Property & Civil Disputes",
    description:
      "Assistance with ownership conflicts and legal civil proceedings.",
    number: "02",
  },
  {
    title: "Criminal Defense",
    description:
      "Strategic defense representation for criminal allegations and cases.",
    number: "03",
  },
  {
    title: "Documentation & Immigration",
    description:
      "Legal documentation support and immigration assistance services.",
    number: "04",
  },
  {
    title: "Dispute Resolution",
    description: "Mediation and legal negotiation for conflict resolution.",
    number: "05",
  },
  {
    title: "Property & Civil Disputes",
    description:
      "Representation in property conflicts and civil litigation matters.",
    number: "06",
  },
];

const companyServices = [
  {
    title: "Corporate & Commercial Law",
    description:
      "Legal support for corporate structure, operations, and governance.",
    number: "01",
  },
  {
    title: "Contracts & Compliance",
    description: "Drafting agreements and ensuring regulatory compliance.",
    number: "02",
  },
  {
    title: "Employment & Labor Law",
    description:
      "Guidance on workforce policies, disputes, and labor regulations.",
    number: "03",
  },
  {
    title: "Intellectual Property",
    description: "Protection for trademarks, copyrights, and business assets.",
    number: "04",
  },
  {
    title: "Investment & Regulatory Support",
    description:
      "Assistance for investment approvals and compliance procedures.",
    number: "05",
  },
  {
    title: "Arbitration & Mediation",
    description: "Efficient resolution of business disputes outside court.",
    number: "06",
  },
];

const Services = () => {
  const [active, setActive] = useState("individuals");

  const pinContainerRef = useRef(null);
  const individualsRef = useRef(null);
  const companiesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline to handle cross-fading and pinning panels
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "servicesPin",
          trigger: pinContainerRef.current,
          start: "top top",
          end: "+=1200", // Length of scroll duration while locked
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            // Update active state based on scroll progress thresholds
            if (self.progress > 0.5) {
              setActive("companies");
            } else {
              setActive("individuals");
            }
          },
        },
      });

      // Animation transitions
      tl.to(individualsRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.inOut",
      }).fromTo(
        companiesRef.current,
        { opacity: 0, y: 30, visibility: "hidden" },
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.4,
          ease: "power2.inOut",
        },
        "-=0.2",
      );
    });

    return () => ctx.revert();
  }, []);

  // Smooth scroll helper when manual tabs are clicked
  const handleTabClick = (tab) => {
    const st = ScrollTrigger.getById("servicesPin");
    if (st) {
      const targetScroll =
        tab === "individuals" ? st.start : st.start + (st.end - st.start) * 0.7;
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  // Shared Service Grid Layout Item
  const renderColumnItems = (services, isEven) => {
    return services
      .filter((_, index) => (isEven ? index % 2 === 0 : index % 2 !== 0))
      .map((item) => (
        <div
          key={item.number}
          className="group border-t border-black/30 py-4 sm:py-5 cursor-pointer"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-lg sm:text-2xl font-secondary font-medium text-black">
                {item.title}
              </h3>
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-sm">
                  {item.description}
                </p>
              </div>
            </div>
            <span className="text-xs sm:text-sm text-slate-400 shrink-0 mt-1">
              {item.number}
            </span>
          </div>
        </div>
      ));
  };

  return (
    <div className="w-full bg-[#F5F5F5] py-20 ">
      {/* ======================================================
          PINNED VIEWPONT CONTAINER (H-SCREEN LOCK)
      ====================================================== */}
      <section
        ref={pinContainerRef}
        className="w-full h-screen overflow-hidden flex flex-col justify-center px-6 py-20"
      >
        {/* TOP ROW LAYOUT */}
        <div className="flex flex-col justify-between h-full w-full">
          {/* ================= TOP HEADER ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
            <div className="lg:col-span-2">
              <h1 className="text-black font-primary text-md font-medium">
                Our Services
              </h1>

              <p className="text-black/80 font-secondary font-medium text-2xl sm:text-5xl mt-2 leading-tight">
                We provide legal guidance backed by strong and effective
                representation.
              </p>
            </div>

            <div className="flex flex-col items-end justify-end gap-2">
              <p className="text-slate-400">Areas of Support</p>

              <div className="inline-flex border border-black/10 rounded-md p-1 bg-white shadow-sm">
                <button
                  onClick={() => handleTabClick("individuals")}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all duration-300 ${
                    active === "individuals"
                      ? "bg-black text-white shadow-md"
                      : "text-black/50 hover:text-black"
                  }`}
                >
                  For Individuals
                </button>

                <button
                  onClick={() => handleTabClick("companies")}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all duration-300 ${
                    active === "companies"
                      ? "bg-black text-white shadow-md"
                      : "text-black/50 hover:text-black"
                  }`}
                >
                  For Companies
                </button>
              </div>
            </div>
          </div>

          {/* ================= CENTER SERVICES ================= */}
          <div className="relative flex-1 flex items-center mt-10 lg:mt-0 overflow-hidden">
            {/* INDIVIDUALS */}
            <div
              ref={individualsRef}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-x-12 content-center"
            >
              <div>{renderColumnItems(individualServices, true)}</div>
              <div>{renderColumnItems(individualServices, false)}</div>
            </div>

            {/* COMPANIES */}
            <div
              ref={companiesRef}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-x-12 content-center opacity-0 invisible"
            >
              <div>{renderColumnItems(companyServices, true)}</div>
              <div>{renderColumnItems(companyServices, false)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          NATURAL BOTTOM SCROLL CONTENT (CTA AREA)
      ====================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 px-6 py-12 border-t border-black/10">
        {/* LEFT CARD */}
        <div className="bg-white rounded-md p-6 flex flex-col justify-between lg:items-end min-h-[260px] shadow-sm">
          <div>
            <h1 className="text-black font-primary text-xl font-medium">
              Our Services
            </h1>
            <p className="font-secondary font-medium text-xl mt-2 text-black/70">
              More about our legal services and solutions
            </p>
          </div>
          <div className="border border-slate-300 w-12 h-12 flex items-center justify-center rounded-md hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* RIGHT IMAGE CARD WITH OVERLAY */}
        <div className="relative rounded-md overflow-hidden min-h-[450px] lg:min-h-[500px] shadow-sm">
          <img
            src={ServicesImage}
            alt="Services"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-md p-6 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between shadow-lg">
            <div>
              <p className="text-black text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight">
                Couldn't find the legal service you need?
              </p>
              <p className="text-slate-500 text-sm mt-1">
                Our team is here to guide you with trusted legal support.
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="w-5 h-5 sm:w-7 sm:h-7" />}
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
