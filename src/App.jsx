import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import Lenis from "lenis";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      smoothTouch: false, // important: avoids weird mobile issues
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Cursor />
      <section className="flex flex-col bg-grey-100 w-full  mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
