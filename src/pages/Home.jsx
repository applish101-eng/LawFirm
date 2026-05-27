import React from "react";

import Hero from "./Hompage/Hero";
import Services from "./Hompage/Services";
import Cases from "./Hompage/Cases";
import Footer from "../components/Footer";
import Faq from "./Hompage/Faq";
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Faq />
    </>
  );
};

export default Home;
