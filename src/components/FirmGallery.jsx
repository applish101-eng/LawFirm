import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import img1 from "../assets/GalleryImage (6).jpg";
import img2 from "../assets/GalleryImage (5).jpg";
import img3 from "../assets/GalleryImage (4).jpg";
import img4 from "../assets/GalleryImage (3).jpg";
import img5 from "../assets/GalleryImage (2).jpg";
import img6 from "../assets/GalleryImage (1).jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { img: img1, alt: "Gallery image 1" },
  { img: img2, alt: "Gallery image 2" },
  { img: img3, alt: "Gallery image 3" },
  { img: img4, alt: "Gallery image 4" },
  { img: img5, alt: "Gallery image 5" },
  { img: img6, alt: "Gallery image 6" },
];

const FirmGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const gridRef = useRef(null);

  const open = useCallback((i) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1)),
    [],
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
    [],
  );

  useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, close, prev, next]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      tl.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4 },
      ).fromTo(
        gridRef.current?.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12 },
        "-=0.6",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={images[lightboxIndex].img}
            alt={images[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-secondary">
            {lightboxIndex + 1} / {images.length}
          </span>
        </div>
      )}

      <section ref={sectionRef} className="w-full bg-[#F5F5F5] py-20">
        <div className="max-w-8xl mx-auto px-6">
          <div
            ref={textRef}
            className="flex flex-col gap-3 lg:gap-20 lg:flex-row pb-14"
          >
            <div className="flex-2 flex flex-col gap-1 lg:gap-4">
              <h2 className="font-primary text-black text-md font-medium">
                Gallery
              </h2>
              <h1 className="font-secondary text-3xl sm:text-3xl lg:text-6xl font-medium leading-tight">
                Our Firm's Memories
              </h1>
            </div>

            <div className="flex-1 flex flex-col justify-end items-end gap-3">
              <p className="text-black font-secondary text-base sm:text-sm leading-relaxed max-w-md lg:text-right">
                A visual archive of the moments, milestones, and people that
                have shaped Liberty Legal Service & Research Center from quiet
                beginnings to the legacy we continue to build.
              </p>
            </div>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {images.map((item, i) => (
              <div
                key={i}
                className="w-full h-160 aspect-[4/3] overflow-hidden rounded-sm cursor-pointer"
                onClick={() => open(i)}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FirmGallery;
