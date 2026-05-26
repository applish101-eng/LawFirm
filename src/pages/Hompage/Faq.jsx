import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "../../components/Button";

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
    question:
      "Do you work with international clients and foreign companies?",
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

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#F5F5F5] px-6 overflow-hidden">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-lg lg:text-xl font-primary text-black text-center lg:text-left">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-6">
          <div className="flex flex-col justify-between lg:w-[40%] gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left font-medium leading-tight">
                Questions we frequently receive from clients & businesses
              </h2>

              <p className="text-sm sm:text-base text-center lg:text-left text-black/70 leading-relaxed">
                We've answered some of the most common questions about our
                services, approach, and areas of practice to help you better
                understand how we work. If you still have a question that
                isn't covered here, feel free to reach out to our team we're
                here to help.
              </p>
            </div>

            <div className="hidden lg:flex flex-col gap-4">
              <div>
                <h1 className="text-2xl font-medium">
                  Need more information?
                </h1>
                <p className="text-black/70">
                  Get in touch with our legal team.
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

          <div className="flex flex-col gap-4 lg:w-[60%]">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-sm"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-start justify-between gap-4 text-left"
                  >
                    <h2 className="text-sm sm:text-base lg:text-xl font-medium leading-snug pr-4 flex-1">
                      {item.question}
                    </h2>

                    <div
                      className={`border flex items-center justify-center rounded-sm p-2 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm lg:text-base text-black/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="lg:hidden flex flex-col gap-4 pt-4">
              <div>
                <h1 className="text-2xl font-medium">
                  Need more information?
                </h1>
                <p className="text-black/70">
                  Get in touch with our legal team.
                </p>
              </div>

              <Button
                variant="secondary"
                size="lg"
                width="lg"
                iconRight={<ArrowRight className="w-5 h-5 sm:w-7 sm:h-7" />}
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
