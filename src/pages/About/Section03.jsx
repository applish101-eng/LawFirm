import React from "react";
import Section03Image from "../../assets/ServiceSection03.png";
import PageSection from "../../components/PageSection";
import Container from "../../components/Container";

const Section03 = () => {
  return (
    <PageSection variant="large" className="bg-[#F4F4F4] text-[#111111]">
      <Container className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start pb-12 lg:pb-20">
        {/* Left Column */}
        <div className="w-full lg:w-[60%] flex flex-col items-start gap-4">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-sm border border-neutral-300 shadow-sm text-xs md:text-sm font-medium tracking-wide">
            <span>Professionalism with Purpose</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] text-balance">
            The Foundation of Trust Behind Our Legal Practice
          </h1>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[40%] flex flex-col gap-4 text-sm md:text-base text-black leading-relaxed">
          <p>
            We believe legal guidance should feel clear, practical, and
            approachable rather than overwhelming or difficult to understand.
            Every matter deserves careful attention, honest communication, and
            reliable legal support built on trust.
          </p>

          <p>
            Through research, professional integrity, and a client-focused
            approach, we support individuals and businesses with dependable,
            responsible, and genuinely human guidance.
          </p>
        </div>
      </Container>

      {/* Image */}
      <div className="w-full relative min-h-[350px] md:min-h-[500px] overflow-hidden">
        <img
          src={Section03Image}
          alt="Legal Practice"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </PageSection>
  );
};

export default Section03;
