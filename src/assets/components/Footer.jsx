import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SnsLinks from "../atoms/SnsLinks";

export default function Footer() {
  return (
    <div className="mx-5 sm:w-[80%] sm:mx-auto font-montserrat font-medium text-sm sm:text-xl">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <img
            src="/logo/black_full_no_bg_reframed.png"
            alt="je-logo"
            className="w-28 sm:w-52 mx-auto"
          />
        </div>
        <ul className="flex flex-col items-center flex-1">
          <li className="mb-2">
            <Link
              className="flex justify-between w-20 sm:w-28 items-center group"
              to="/about"
            >
              <span className="">About</span>
              <FontAwesomeIcon
                className="text-sm group-hover:translate-x-2 transition-all duration-300"
                icon={faChevronRight}
              />
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className="flex justify-between w-20 sm:w-28 items-center group"
              to="/projects"
            >
              <span className="">Projects</span>
              <FontAwesomeIcon
                className="text-sm group-hover:translate-x-2 transition-all duration-300"
                icon={faChevronRight}
              />
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className="flex justify-between w-20 sm:w-28 items-center group"
              to="/contact"
            >
              <span className="">Contact</span>
              <FontAwesomeIcon
                className="text-sm group-hover:translate-x-2 transition-all duration-300"
                icon={faChevronRight}
              />
            </Link>
          </li>
        </ul>
        <div className="text-xl max-w-1/3 flex-1 flex justify-center items-center">
          <SnsLinks variant="footer" />
        </div>
      </div>
      <div className="text-center text-sm sm:text-lg text-orange mt-4 mb-8">
        <p>©Justin | Code, calm, and curiosity.</p>
      </div>
    </div>
  );
}
