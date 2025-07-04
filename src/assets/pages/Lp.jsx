import { useState, useEffect, useRef, Suspense } from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import ReachOut from "../components/ReachOut";
import Stack from "../components/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroThreeBg from "../components/HeroThreeBg";
import MeGLBModel from "../components/MeGLBModel";

export default function Lp({ onThreeLoading }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const showcaseRef = useRef(null);
  // ...existing code...

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    if (!isTouch || !showOverlay) return;
    function handleClickOutside(e) {
      if (showcaseRef.current && !showcaseRef.current.contains(e.target)) {
        setShowOverlay(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isTouch, showOverlay]);

  return (
    <>
      {/* 3D Model Overlay - always on top, pointer-events none */}
      <MeGLBModel />
      {/* Main Content */}
      <div>
        <Navbar />
        {/* Hero Section */}
        <div className="relative mx-5 sm:mx-16 h-screen flex justify-center items-center">
          <HeroThreeBg onLoadingProgress={onThreeLoading} />
          <h1 className="font-dmsans font-semibold text-center text-3xl relative z-10">
            <span>Bonjour, welcome to my world.</span>
            <br />
            <span className="text-orange block mt-2">
              Crafting experiences that resonate.
            </span>
          </h1>
          {/* <MeModel /> */}
        </div>
        {/* Sandbox Showcase */}
        <div className="bg-beige w-[120%] relative left-1/2 -translate-x-1/2 h-70  mt-12 -mb-28 rotate-5"></div>
        <div className="w-full h-[400px] sm:h-[600px] bg-beige flex items-center">
          <div className="relative z-10 flex-1 font-dmsans font-medium text-3xl text-center">
            <h2 className="text-center mb-10 mx-5">
              Explore my sandbox of 3D micro-experiences.
            </h2>
            <div
              ref={showcaseRef}
              className="shadow-[0_2px_6px_rgba(0,0,0,0.5)] group relative w-[90%] sm:w-[70%] aspect-[1/0.7] sm:aspect-[1/0.55] max-w-[1024px] bg-black mx-auto rounded-full overflow-hidden cursor-pointer"
              onClick={
                isTouch
                  ? (e) => {
                      // Only toggle overlay if not clicking the link
                      if (e.target.tagName !== "A" && !e.target.closest("a")) {
                        setShowOverlay((prev) => !prev);
                      }
                    }
                  : undefined
              }
            >
              <video
                src="/video/sandbox.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:blur transition-all duration-300"
                style={
                  isTouch && showOverlay ? { filter: "blur(4px)" } : undefined
                }
              />
              <div
                className={`rounded-full text-2xl text-white/80 bg-green/80  transition-all flex justify-center items-center gap-3 duration-300 absolute inset-0 w-full h-full object-cover
                ${
                  isTouch
                    ? showOverlay
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                    : "opacity-0 group-hover:opacity-100"
                }
              `}
              >
                <a
                  href="https://threejssandbox.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={isTouch ? (e) => e.stopPropagation() : undefined}
                  className="p-2 flex justify-center items-center gap-3 hover:text-black/50 transition-all duration-300"
                >
                  <span>View Site.</span>
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faUpRightFromSquare}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-beige w-[120%] relative left-1/2 -translate-x-1/2 h-70 -mt-28 mb-28 rotate-5"></div>
        {/* Other Sections */}
        <div className="font-dmsans font-medium mx-5">
          <Projects />
          <Stack />
          <ReachOut />
        </div>
        <Footer />
      </div>
    </>
  );
}
