import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lp from "./assets/pages/Lp";
import AboutPage from "./assets/pages/AboutPage";
import ProjectsPage from "./assets/pages/ProjectsPage";
import LoaderScreen from "./assets/components/LoaderScreen";

function App() {
  const [threePercent, setThreePercent] = useState(0);
  const [imgPercent, setImgPercent] = useState(0);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canEnter, setCanEnter] = useState(false); // Only allow enter when user clicks

  // Track images
  useEffect(() => {
    const imgElements = Array.from(document.images);
    if (imgElements.length === 0) {
      setImgPercent(100);
      return;
    }
    let loaded = 0;
    const update = () => {
      loaded += 1;
      setImgPercent(Math.round((loaded / imgElements.length) * 100));
    };
    imgElements.forEach((img) => {
      if (img.complete) {
        update();
      } else {
        img.addEventListener("load", update, { once: true });
        img.addEventListener("error", update, { once: true });
      }
    });
  }, []);

  // Combine progress
  useEffect(() => {
    const percent = Math.round((threePercent + imgPercent) / 2);
    setLoadingPercent(percent);
    if (percent === 100) {
      setCanEnter(true); // Only allow enter, don't auto-hide
    }
  }, [threePercent, imgPercent]);

  // Handler for when user clicks Enter
  const handleEnter = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && (
        <LoaderScreen
          percent={loadingPercent}
          canEnter={canEnter}
          onEnter={handleEnter}
        />
      )}
      <Routes>
        <Route path="/" element={<Lp onThreeLoading={setThreePercent} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
