import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", move);

    // Set the initial transform percentage once so it stays centered
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const animate = () => {
      // Adjusted easing factor slightly for smoother tracking (0.1 - 0.2 is usually sweet)
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
    >
      {/* The inner dot must be white for mix-blend-difference to invert perfectly */}
      <div className="w-6 h-6 rounded-full bg-white" />
    </div>
  );
};

export default Cursor;