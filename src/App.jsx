import "./App.css";
import { Routes, Route } from "react-router-dom";
import Lp from "./assets/pages/Lp";
import AboutPage from "./assets/pages/AboutPage";
import ProjectsPage from "./assets/pages/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
