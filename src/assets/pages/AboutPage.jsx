import gsap from "gsap";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MeGLBModel from "../components/MeGLBModel";

export default function AboutPage() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const firstDivRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    gsap.set(pathRef.current, { drawSVG: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        pin: containerRef.current,
        pinSpacing: true,
        start: "top top",
        end: "+=300%",
        markers: true,
      },
    });

    // Set initial state
    gsap.set(firstDivRef.current, {
      opacity: 0,
      x: -20,
    });

    tl.to(pathRef.current, {
      drawSVG: "100%",
      duration: 1,
      ease: "none",
    }).to(
      firstDivRef.current,
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      },
      0.3
    ); // This will trigger at 20% of the animation

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      <MeGLBModel />

      <div className="relative">
        <Navbar />
        <div className="pt-[150px] w-2/3 mx-auto text-center">
          <p>
            Hi, I am Justin. Full Stack developer. Fond of 3d. Blabla Blabla
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla BlablaBlabla Blabla
            Blabla BlablaBlabla Blabla Blabla BlablaBlabla Blabla Blabla
            BlablaBlabla Blabla Blabla BlablaBlabla Blabla Blabla Blabla
          </p>
        </div>
        <div
          ref={firstDivRef}
          className="absolute left-[30%] top-[40%] opacity-0"
        >
          <p>aaaa</p>
          <p>aaaaaaaa</p>
        </div>
        <div
          className="min-h-screen w-full flex items-center justify-center overflow-hidden"
          ref={containerRef}
        >
          <svg
            className="svg__shape rotate-90 w-full h-full max-w-[900px] max-h-[80vh]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3000 900"
          >
            <g clipPath="url(#a)">
              <g className="svg__path">
                <path
                  ref={pathRef}
                  fill="none"
                  stroke="#6a7c6b"
                  strokeLinecap="round"
                  strokeWidth="6"
                  d="M226.39 500.018c284.832.004 413.672.038 559.61.278 95.921.155 181.398-9.257 238 6.82 51.62 14.644 75.31-7.436 115.75-21.812 52.881-18.721 84.36 16.868 120.25 35.971 41.22 21.576 71.688-.606 116-36.246s81.75 2.665 123.119 31.642c46.617 32.635 81.881 1.775 128.881-35.944 34.429-28.24 73.702.185 112 28.525 49.944 36.7 88.816.23 134.25-18.77 35.327-14.699 64.43 1.216 99.75 8.348 48.486 9.952 175.246 1.398 282 1.307 30.584-.025 60.192-.041 90.878-.051"
                />
              </g>
            </g>
          </svg>
        </div>
        <Footer />
      </div>
    </>
  );
}
