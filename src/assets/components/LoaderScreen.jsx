import React, { useEffect, useRef, useState } from "react";

export default function LoaderScreen({ percent, canEnter, onEnter }) {
  const [showComplete, setShowComplete] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeOutTexts, setFadeOutTexts] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    if (canEnter) {
      setShowComplete(true);
      timeoutRef.current = setTimeout(() => {
        setFadeOutTexts(true); // fade out texts and bar
        setTimeout(() => {
          setShowEnter(true); // fade in enter button after fade out
        }, 600); // match fade duration
      }, 800);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [canEnter]);

  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => {
      if (onEnter) onEnter();
    }, 600);
  };

  return (
    <div
      id="preloader"
      className={`font-dmsans fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-green transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`${
          fadeOutTexts ? "opacity-0" : "opacity-100"
        } w-[300px] h-[2px] bg-white/10 mb-5 relative`}
      >
        <div
          className={`absolute left-0 top-0 h-full bg-white transition-all duration-500 `}
          style={{ width: `${percent}%`, transitionProperty: "width, opacity" }}
        ></div>
      </div>
      <div
        className={`h-12 relative overflow-hidden my-5 w-[200px] transition-opacity duration-700 ${
          fadeOutTexts ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`absolute w-full text-center uppercase font-bold text-white text-base tracking-tight transition-transform duration-500 ${
            showComplete
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          Loading
        </div>
        <div
          className={`absolute w-full text-center uppercase font-bold text-white text-base tracking-tight transition-transform duration-500 ${
            showComplete
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          Complete
        </div>
      </div>
      <div
        className={`fixed bottom-8 right-8 font-bold text-[6rem] leading-[0.8] text-white opacity-10 select-none pointer-events-none transition-opacity duration-700 ${
          fadeOutTexts ? "opacity-0" : "opacity-100"
        }`}
      >
        {percent}
      </div>
      {showEnter && (
        <button
          className={`shadow-button absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-3 text-lg font-bold rounded-full transition-opacity duration-700 bg-white tracking-wide ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleEnter}
        >
          Enter Site.
        </button>
      )}
    </div>
  );
}
