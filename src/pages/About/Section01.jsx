import React from "react";
import Section01Service from "../../assets/ServiceSection01.png";
import PageSection from "../../components/PageSection";
import Container from "../../components/Container";

const Section01 = () => {
  return (
    <PageSection className="bg-[#F5F5F5]">
      <Container className="flex flex-col gap-3 lg:gap-20 lg:flex-row">
        <div className="flex-2 flex flex-col gap-1 lg:gap-4">
          <h2 className="font-primary text-black text-md font-medium  ">
            About Us
          </h2>
          <h1 className="font-secondary text-3xl sm:text-3xl lg:text-6xl font-medium leading-tight">
            Every situation deserves thoughtful guidance.
          </h1>
        </div>

        <div className="flex-1 flex flex-col justify-end items-end gap-3">
          <p className="text-black font-secondary text-base sm:text-sm leading-relaxed max-w-md lg:text-right">
            We begin every consultation by taking the time to truly understand
            your situation, so we can provide clear, practical, and thoughtful
            legal guidance tailored to your needs.
          </p>

          <a
            href="#"
            className="font-primary flex gap-2 text-sm text-black transition-colors duration-300 w-fit"
          >
            <span>-</span>
            <p className="underline font-secondary ">Meera Maharjan</p>
          </a>
        </div>
      </Container>

      <img
        src={Section01Service}
        alt=""
        className="w-full h-full mt-12 lg:object-cover"
      />
    </PageSection>
  );
};

export default Section01;
