import Footer from "../components/Footer";
import MeGLBModel from "../components/MeGLBModel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <MeGLBModel />
      <Navbar />
      <main className="font-dmsans mx-5 my-[150px]">
        <div className="px-5 max-w-[600px] mx-auto text-justify mb-8">
          <h1>
            Different kinds of projects I’ve worked on: group collaborations
            from my bootcamp, personal training projects where I explored new
            ideas, and real websites developed for clients.
          </h1>
        </div>
        <Projects location="projects" />
        <div className="font-dmsans mt-[75px] flex justify-center">
          <p>and more to come...</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
