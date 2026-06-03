import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import FaqPage from "./pages/FaqPage";
import Gallery from "./pages/Gallery";
import Lenis from "lenis";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import WelcomePopup from "./components/WelcomePopup";
import ScrollToTop from "./components/ScrollToTop";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const [phase, setPhase] = useState("loading");

  const handleLoaderComplete = useCallback(() => {
    setPhase("welcome");
  }, []);

  const handleWelcomeClose = useCallback(() => {
    setPhase("ready");
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      smoothTouch: false,
    });
    window.lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!window.lenis) return;
    if (phase === "ready") {
      window.lenis.start();
    } else {
      window.lenis.stop();
    }
  }, [phase]);

  return (
    <>
      <ScrollToTop />
      {phase === "loading" && <Loader onComplete={handleLoaderComplete} />}
      {phase === "welcome" && (
        <WelcomePopup
          isVisible
          onClose={handleWelcomeClose}
        />
      )}
      <section className="flex flex-col bg-grey-100 w-full mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
