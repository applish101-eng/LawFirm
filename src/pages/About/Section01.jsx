import React from "react";
import Section01Service from "../../assets/ServiceSection01.png";

const Section01 = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center bg-white px-6">
      <div className="mx-auto flex flex-col lg:flex-row gap-3 lg:gap-20">
        <div className="flex-2 flex flex-col gap-1 lg:gap-4">
          <h2 className="font-primary text-black/60 text-sm tracking-widest uppercase">About Us</h2>
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
      </div>

      <img
        src={Section01Service}
        alt=""
        className="w-full h-full mt-12 lg:object-cover"
      />
    </section>
  );
};

export default Section01;
