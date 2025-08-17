import gsap from "gsap";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MeGLBModel from "../components/MeGLBModel";
import AboutCard from "../atoms/AboutCard";

export default function AboutPage() {
  const containerRef = useRef(null);
  const subContainerRef = useRef(null);
  const pathRef = useRef(null);
  const introDivRef = useRef(null);
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const thirdDivRef = useRef(null);
  const fourthDivRef = useRef(null);
  const fifthDivRef = useRef(null);
  const sixthDivRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    gsap.set(pathRef.current, { drawSVG: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        start: "top top",
        // end: "bottom bottom",
        end: "+=600%",
        pin: true,
        markers: true,
      },
    });

    // Set initial state
    gsap.set(introDivRef.current, {
      opacity: 1,
      y: 0,
    });

    gsap.set([firstDivRef.current, thirdDivRef.current, fifthDivRef.current], {
      opacity: 0,
      x: -20,
    });

    gsap.set(
      [secondDivRef.current, fourthDivRef.current, sixthDivRef.current],
      {
        opacity: 0,
        x: +20,
      }
    );

    tl.to(subContainerRef.current, {
      y: () => {
        const intro = introDivRef.current;
        const rect = intro.getBoundingClientRect();
        return -rect.height;
      },
    })
      .to(
        pathRef.current,
        {
          drawSVG: "100%",
          duration: 1,
          ease: "none",
        },
        "-=0.8"
      )
      .to(
        firstDivRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
      .to(
        secondDivRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0.1
      )
      .to(
        thirdDivRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0.2
      )
      .to(
        fourthDivRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0.3
      )
      .to(
        fifthDivRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0.4
      )
      .to(
        sixthDivRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0.5
      );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      <MeGLBModel />
      {/* <Navbar /> */}
      <div className="relative" ref={containerRef}>
        <Navbar />
        <div className="relative" ref={subContainerRef}>
          <div className="flex flex-col">
            <div
              className="pt-[150px] w-2/3 mx-auto text-justify"
              ref={introDivRef}
            >
              <h1>
                Hi, I’m Justin Etienne — a French full-stack developer living in
                Tokyo. I’m passionate about building interactive and creative
                digital experiences, especially with 3D and modern web
                technologies. <br /> With an academic background in languages,
                culture, and international relations, I bring a unique
                perspective that bridges technology, communication, and design.
              </h1>
            </div>
            <div className="flex-grow flex justify-center">
              <div
                className="w-full flex items-center justify-center overflow-hidden h-[98vh]"
                // ref={containerRef}
              >
                <svg
                  width="257"
                  height="858"
                  viewBox="0 0 257 858"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_141_122)">
                    <path
                      ref={pathRef}
                      d="M128.231 0C128.228 154.411 128.367 -43.7036 128.231 35.4115C128.141 87.4117 133.512 133.749 124.336 164.435C115.97 192.417 128.6 205.256 136.791 227.184C147.498 255.846 127.084 272.879 116.252 292.374C103.856 314.682 116.598 331.237 136.948 355.259C157.299 379.281 135.423 399.575 118.881 422.004C100.243 447.273 117.745 466.485 139.405 491.872C155.409 510.63 139.258 531.798 123.117 552.589C102.12 579.635 123.006 600.729 133.835 625.367C142.248 644.511 133.178 660.303 129.068 679.443C123.422 705.735 128.27 774.447 128.322 832.32C128.336 848.9 129.062 841.365 129.068 858"
                      stroke="#6A7C6B"
                      strokeWidth="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_141_122">
                      <rect
                        width="858"
                        height="257"
                        fill="white"
                        transform="matrix(0 1 -1 0 257 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <AboutCard
            ref={firstDivRef}
            positionY={"40%"}
            positionYsm={"48%"}
            left={false}
            title={"Bachelor’s Degree – Aix-Marseille University"}
            text={
              "Studied Applied Foreign Languages (English & Japanese) with courses in law, economics, management, and marketing."
            }
          />
          <AboutCard
            ref={secondDivRef}
            positionY={"48%"}
            positionYsm={"53%"}
            left={true}
            title={"EF Tokyo – Japanese Language Program"}
            text={
              "Intensive 4-month Japanese study, gaining strong communication and immersion experience in Tokyo."
            }
          />
          <AboutCard
            ref={thirdDivRef}
            positionY={"54%"}
            positionYsm={"58%"}
            left={false}
            title={"Master’s Degree (Year 1) – Aix-Marseille University"}
            text={
              "Asian societies & cultures, with focus on Japanese geopolitics. Research project on wine in France–Japan international relations."
            }
          />
          <AboutCard
            ref={fourthDivRef}
            positionY={"62%"}
            positionYsm={"64%"}
            left={true}
            title={"Meiji University – University Exchange"}
            text={
              "Studied intercultural communication and deepened knowledge of Japanese society while living in Tokyo."
            }
          />
          <AboutCard
            ref={fifthDivRef}
            positionY={"68%"}
            positionYsm={"69%"}
            left={false}
            title={"Le Wagon Tokyo – Web Development Bootcamp"}
            text={
              "3-month intensive program learning full-stack development through hands-on projects."
            }
          />
          <AboutCard
            ref={sixthDivRef}
            positionY={"76%"}
            positionYsm={"74%"}
            left={true}
            title={"Full-Stack Developer – GxP"}
            text={
              "Currently building and maintaining web applications, combining creativity and technical expertise."
            }
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
