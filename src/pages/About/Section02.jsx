import React from "react";
import PageSection from "../../components/PageSection";
import Container from "../../components/Container";
const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "1,146+", label: "Cases Resolved" },
  { value: "20+", label: "Practice Areas" },
];

const Section02 = () => {
  return (
    <PageSection className="bg-[#F5F5F5]">
      <Container className="flex flex-col items-center py-10">
        {/* Eyebrow */}
        <p className="text-center font-primary text-sm text-black tracking-wide my-4 ">
          About Us
        </p>

        {/* Statement */}
        <h2 className="font-secondary font-medium text-center text-black leading-[1.1] tracking-tight text-2xl lg:text-5xl max-w-6xl">
          Under the leadership of Advocate Meera Maharjan, we provide clear and
          practical legal guidance built on research integrity and trust
        </h2>

        {/* Stats */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-14 lg:mt-28 max-w-6xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center w-full h-auto flex-col gap-2"
              >
                <p className="font-secondary font-light text-black text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                  {s.value}
                </p>
                <p className="font-secondary text-sm text-black font-normal">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </PageSection>
  );
};

export default Section02;
