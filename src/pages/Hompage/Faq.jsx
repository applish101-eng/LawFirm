import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const Faq = () => {
  return (
    <>
      <section className="relative w-full min-h-screen px-4 sm:px-6 py-16 overflow-hidden bg-[#F5F5F5]">
        <div className="h-full flex flex-col gap-4 max-w-[1440px] mx-auto">
          {/* TITLE */}
          <h1 className="text-lg lg:text-xl font-primary text-black text-center lg:text-left">
            Frequently Asked Questions
          </h1>

          {/* MAIN LAYOUT */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-6">
            {/* =========================
              LEFT CONTAINER
            ========================= */}
            <div className="flex flex-col justify-between lg:w-[40%] gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left font-medium leading-tight">
                  Questions we frequently receive from clients & businesses
                </h2>

                <p className="text-sm sm:text-base text-center lg:text-left text-black/70 leading-relaxed">
                  We’ve answered some of the most common questions about our
                  services, approach, and areas of practice to help you better
                  understand how we work. If you still have a question that
                  isn’t covered here, feel free to reach out to our team we’re
                  here to help.
                </p>
              </div>

              {/* DESKTOP CTA */}
              <div className="hidden lg:flex flex-col gap-4">
                <div>
                  <h1 className="text-2xl font-medium">
                    Need more information?
                  </h1>

                  <p className="text-black/70">
                    Get in touch with our legal team.
                  </p>
                </div>

                <button className="w-fit flex items-center gap-3 bg-primary-500 text-black text-lg font-medium pr-2 pl-4 py-2 rounded whitespace-nowrap hover:bg-primary-600 transition-colors duration-300 cursor-pointer">
                  <span>Talk with Our Team</span>

                  <span className="bg-black text-primary-500 p-3 rounded-sm">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </div>
            </div>

            {/* =========================
              FAQ CONTAINER
            ========================= */}
            <div className="flex flex-col gap-4 lg:w-[60%]">
              {/* FAQ ITEM */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm flex flex-col gap-3">
                <div className="flex w-full items-start justify-between gap-4">
                  <h2 className="text-sm sm:text-base lg:text-xl font-medium leading-snug pr-4">
                    What should I consider when choosing a law firm in Nepal?
                  </h2>

                  <div className="border flex items-center justify-center rounded-sm p-2 shrink-0">
                    <ChevronDown />
                  </div>
                </div>

                <p className="text-sm lg:text-base text-black/70 leading-relaxed">
                  When selecting a law firm, you should consider experience,
                  specialization in relevant practice areas, client track
                  record, and the ability to provide clear and practical legal
                  guidance.
                </p>
              </div>

              {/* FAQ ITEM */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm flex flex-col gap-3">
                <div className="flex w-full items-center justify-between gap-4">
                  <h2 className="text-sm sm:text-base lg:text-xl font-medium leading-snug pr-4">
                    What legal services does your firm provide?
                  </h2>

                  <div className="border flex items-center justify-center rounded-sm p-2 shrink-0">
                    <ChevronDown />
                  </div>
                </div>
              </div>

              {/* FAQ ITEM */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm flex flex-col gap-3">
                <div className="flex w-full items-center justify-between gap-4">
                  <h2 className="text-sm sm:text-base lg:text-xl font-medium leading-snug pr-4">
                    Which industries do you specialize in serving?
                  </h2>

                  <div className="border flex items-center justify-center rounded-sm p-2 shrink-0">
                    <ChevronDown />
                  </div>
                </div>
              </div>

              {/* FAQ ITEM */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm flex flex-col gap-3">
                <div className="flex w-full items-center justify-between gap-4">
                  <h2 className="text-sm sm:text-base lg:text-xl font-medium leading-snug pr-4">
                    Do you work with international clients and foreign
                    companies?
                  </h2>

                  <div className="border flex items-center justify-center rounded-sm p-2 shrink-0">
                    <ChevronDown />
                  </div>
                </div>
              </div>

              {/* FAQ ITEM */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm flex flex-col gap-3">
                <div className="flex w-full items-center justify-between gap-4">
                  <h2 className="text-sm sm:text-base lg:text-xl font-medium leading-snug pr-4">
                    What types of clients do you typically represent?
                  </h2>

                  <div className="border flex items-center justify-center rounded-sm p-2 shrink-0">
                    <ChevronDown />
                  </div>
                </div>
              </div>

              {/* FAQ ITEM */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm flex flex-col gap-3">
                <div className="flex w-full items-center justify-between gap-4">
                  <h2 className="text-sm sm:text-base lg:text-xl font-medium leading-snug pr-4">
                    Do you provide online legal consultations?
                  </h2>

                  <div className="border flex items-center justify-center rounded-sm p-2 shrink-0">
                    <ChevronDown />
                  </div>
                </div>
              </div>

              {/* MOBILE CTA */}
              <div className="lg:hidden flex flex-col gap-4 pt-4">
                <div>
                  <h1 className="text-2xl font-medium">
                    Need more information?
                  </h1>

                  <p className="text-black/70">
                    Get in touch with our legal team.
                  </p>
                </div>

                <button className="w-fit flex items-center gap-3 bg-primary-500 text-black text-lg font-medium pr-2 pl-4 py-2 rounded whitespace-nowrap hover:bg-primary-600 transition-colors duration-300 cursor-pointer">
                  <span>Talk with Our Team</span>

                  <span className="bg-black text-primary-500 p-3 rounded-sm">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;