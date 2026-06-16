import React from "react";
import SEO from "../components/SEO";
import Section01 from "./About/Section01";
import Section02 from "./About/Section02";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section03 from "./About/Section03";
import Section04 from "./About/Section04";

const About = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <SEO
        title="Advocate Meera Maharjan | About Liberty Legal Service & Research Center Nepal"
        description="Learn about Advocate Meera Maharjan and Liberty Legal Service & Research Center based in Kathmandu, Nepal. Expert legal counsel with years of experience."
        canonical="https://libertylegal.com.np/about"
      />
      <Navbar />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
    </div>
  );
};

export default About;

