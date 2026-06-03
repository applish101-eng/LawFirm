import React from "react";
import HeroImage from "../../assets/HeroImage.png";
import { ArrowRight, SectionIcon } from "lucide-react";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* ===============================
        BACKGROUND LAYER
      =============================== */}
        <img
          src={HeroImage}
          alt="Advocate Meera Maharjan Liberty Legal Service law firm Kathmandu Nepal"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ===============================
        GRADIENT OVERLAY LAYER
      =============================== */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black/0 to-black z-10" /> */}
        <div className="absolute inset-0 z-10 bg-linear-180 from-black to-40%"></div>
        <div className="absolute inset-0 z-10 bg-linear-15 from-black to-60%"></div>

        {/* ===============================
        CONTENT LAYER
        (ANCHORED SYSTEM)
      =============================== */}
        <div className="relative z-20 h-full flex flex-col justify-between px-6 pt-25 pb-10">
          {/* ===========================
          TOP RIGHT CONTENT
        =========================== */}
          <div className="sm:flex justify-end hidden">
            <p className="max-w-md text-right text-white text-sm font-light font-secondary leading-relaxed">
              Led by Advocate Meera Maharjan, Liberty Legal Service & Research
              Center provides experienced legal counsel, strategic advocacy, and
              research driven solutions for individuals, communities, and
              organizations across Nepal.
            </p>
          </div>

          {/* ===========================
          BOTTOM CONTENT (PINNED)
        =========================== */}
          <div className="flex flex-col gap-5 h-full justify-end">
            {/* -------- STATS ROW -------- */}
            <div className="hidden sm:grid lg:flex gap-8 lg:gap-16 sm:grid-cols-2 sm:w-fit items-start">
              {/* STAT 1 */}
              <div className="flex flex-col gap-2 text-left sm:col-span-2 lg:col-span-1">
                <h2 className="text-5xl font-light text-white font-secondary">
                  98%
                </h2>
                <p className="text-sm text-white/80">Client Satisfaction</p>
              </div>

              {/* STAT 2 */}
              <div className="flex flex-col gap-2 text-left">
                <h2 className="text-5xl font-light text-white font-secondary">
                  1,146+
                </h2>
                <p className="text-sm text-white/80">Cases Resolved</p>
              </div>

              {/* STAT 3 */}
              <div className="flex flex-col gap-2 text-left">
                <h2 className="text-5xl font-light text-white font-secondary">
                  20+
                </h2>
                <p className="text-sm text-white/80">Practice Areas</p>
              </div>
            </div>

            {/* -------- CTA + HEADING -------- */}
            <div className="flex  flex-col sm:flex-row sm:items-end gap-4 justify-between">
              {/* HEADING */}
              <div className="flex flex-col gap-2">
                <h1 className="max-w-4xl sm:text-5xl text-2xl  font-normal text-white leading-tight font-secondary ">
                  Trusted legal guidance in Kathmandu for the matters that
                  matter most.
                </h1>
                <p className="max-w-md  text-white text-[12px] font-light font-secondary leading-relaxed sm:hidden">
                  Led by Advocate Meera Maharjan, Liberty Legal Service &
                  Research Center provides experienced legal counsel, strategic
                  advocacy, and research driven solutions for individuals,
                  communities, and organizations across Nepal.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-4">
                {/* BOOK CONSULTATION — MOBILE ONLY */}
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

                {/* OUR STORY */}
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

                {/* TEXT */}
                <p className="text-white/80 text-md hidden sm:block font-light font-secondary">
                  15+ years of legal excellence in Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MOBILE STATS BELOW HERO */}
      <div className="sm:hidden bg-black h-screen text-white px-10 py-10 grid grid-cols-2 gap-8 place-content-center ">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-4xl font-light font-secondary">98%</h2>
          <p className="text-sm text-white/80">Client Satisfaction</p>
        </div>

        <div className="flex flex-col gap-2 ">
          <h2 className="text-4xl font-light font-secondary">1,146+</h2>
          <p className="text-sm text-white/80">Cases Resolved</p>
        </div>

        <div className="flex flex-col gap-2 ">
          <h2 className="text-4xl font-light font-secondary">20+</h2>
          <p className="text-sm text-white/80">Practice Areas</p>
        </div>

        <div className="flex flex-col gap-2 ">
          <h2 className="text-4xl font-light font-secondary">15+</h2>
          <p className="text-sm text-white/80">Years of Excellence</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
