import React from "react";
const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "1,146+", label: "Cases Resolved" },
  { value: "20+", label: "Practice Areas" },
];

const Section02 = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center bg-[#F5F5F5] px-6">
      {/* Eyebrow */}
      <p className="text-center font-primary text-sm text-black tracking-wide mb-4">
        About Us
      </p>

      {/* Statement */}
      <h2 className="font-secondary font-medium text-center text-black leading-[1.1] tracking-tight text-2xl lg:text-5xl  max-w-6xl mx-auto">
        We are experienced legal professionals providing clear and practical
        legal guidance built on research integrity and trust
      </h2>

      {/* Stats */}
      <div className="w-full h-full flex justify-center items-center">
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-14 lg:mt-28 max-w-6xl ">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center w-full h-auto flex-col gap-2"
            >
              <p className="  font-secondary font-light text-black text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                {s.value}
              </p>
              <p className="font-secondary text-sm text-black font-normal">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section02;
