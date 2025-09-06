import Footer from "../components/Footer";
import MeGLBModel from "../components/MeGLBModel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <MeGLBModel />
      <Navbar />
      <main className="font-dmsans font-medium mx-5 my-[150px]">
        <Projects location="projects" />
      </main>
      <Footer />
    </>
  );
}
