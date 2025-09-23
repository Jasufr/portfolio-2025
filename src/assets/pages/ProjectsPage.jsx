import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import MeGLBModel from "../components/MeGLBModel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <>
      <MeGLBModel />
      <Navbar />
      <main className="font-dmsans mx-5 my-[150px]">
        <div className="px-5 max-w-[600px] mx-auto text-justify mb-8">
          <h1>{t("intro")}</h1>
        </div>
        <Projects location="projects" />
        <div className="font-dmsans mt-[75px] flex justify-center">
          <p>{t("lastLine")}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
