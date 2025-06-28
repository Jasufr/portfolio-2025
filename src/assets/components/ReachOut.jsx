import { Link } from "react-router-dom";
import ShadowButton from "../atoms/ShadowButton";

export default function ReachOut() {
  return (
    <div className="text-center min-h-screen flex flex-col justify-center">
      <h2 className="font-semibold text-3xl mb-2">Reach out.</h2>
      <p className="text-2xl text-orange @container">
        Always happy to talk ideas, projects,
        <br className="hidden @min-[460px]:inline" /> or just say hi.
      </p>
      <ShadowButton link={"/contact"} text={"Let's Talk"} />
    </div>
  );
}
