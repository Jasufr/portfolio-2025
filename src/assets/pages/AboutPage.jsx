import React, { useEffect, useRef } from "react";

export default function AboutPage() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const totalLength = path.getTotalLength();
    const windowLength = 300; // visible segment of the curve

    path.style.strokeDasharray = `${windowLength} ${totalLength}`;
    path.style.strokeDashoffset = totalLength;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = scrollTop / scrollHeight;
      const drawPosition = totalLength * scrollPercent;

      // Animate the visible window along the curve
      path.style.strokeDashoffset = totalLength - drawPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "300vh" }}>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <svg width="200" height="1000" viewBox="0 0 200 1000">
          <path
            ref={pathRef}
            d="M 100 0 Q 0 250 100 500 T 100 1000"
            stroke="#000"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
