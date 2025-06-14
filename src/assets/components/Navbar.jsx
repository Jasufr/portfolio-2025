import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [language, setLanguage] = useState("uk");
  const [showFlags, setShowFlags] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const flagMap = {
    uk: "/svg/uk-flag.svg",
    fr: "/svg/fr-flag.svg",
    jp: "/svg/ja-flag.svg",
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowFlags(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="flex justify-between mx-5 my-4 sm:px-16 sm:py-6 items-center">
        <Link to="/">
          <img
            src="/logo/black_line_no_bg_reframed.png"
            alt="je-logo"
            className="w-42"
          />
        </Link>
        <ul className="hidden text-2xl min-sm:flex gap-5 items-center">
          <li className="relative group hidden sm:block cursor-pointer">
            <Link to="/">
              <span className="relative inline-block px-1">
                About
                <span className="absolute left-1/2 top-1/2 h-[2px] w-0 bg-green transition-all duration-300 group-hover:w-[110%] -translate-x-1/2 -translate-y-1/2"></span>
              </span>
            </Link>
          </li>
          <li className="relative group hidden sm:block cursor-pointer">
            <Link to="/">
              <span className="relative inline-block px-1">
                Projects
                <span className="absolute left-1/2 top-1/2 h-[2px] w-0 bg-green transition-all duration-300 group-hover:w-[110%] -translate-x-1/2 -translate-y-1/2"></span>
              </span>
            </Link>
          </li>
          <li className="relative group hidden sm:block cursor-pointer">
            <Link to="/">
              <span className="relative inline-block px-1">
                Contact
                <span className="absolute left-1/2 top-1/2 h-[2px] w-0 bg-green transition-all duration-300 group-hover:w-[110%] -translate-x-1/2 -translate-y-1/2"></span>
              </span>
            </Link>
          </li>
          <li className="relative">
            <img
              src={flagMap[language]}
              alt={`${language} flag`}
              className="w-7 cursor-pointer hover:scale-110 transition-transform drop-shadow-sm"
              onClick={() => setShowFlags((prev) => !prev)}
            />

            {showFlags && (
              <div className="absolute top-full mt-2 bg-white rounded flex flex-col gap-2 z-10">
                {Object.entries(flagMap).map(([lang, path]) =>
                  lang !== language ? (
                    <img
                      key={lang}
                      src={path}
                      alt={`${lang} flag`}
                      className="w-7 cursor-pointer hover:scale-110 transition-transform mt-2 drop-shadow-sm"
                      onClick={() => handleLanguageChange(lang)}
                    />
                  ) : null
                )}
              </div>
            )}
          </li>
        </ul>
        <button
          onClick={toggleMenu}
          className="relative w-12 h-12 rounded flex items-center justify-center z-100 min-sm:hidden"
        >
          {/* Top bar */}
          <span
            className={`absolute w-7 h-[6px] border-[2px] rounded transition-all duration-300 ${
              menuOpen ? " rotate-[-45deg] w-5 border-white" : "-translate-y-2"
            }`}
          />
          {/* Middle bar */}
          <span
            className={`absolute w-7 h-[6px] border-[2px] rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Bottom bar */}
          <span
            className={`absolute w-7 h-[6px] border-[2px] rounded transition-all duration-300 ${
              menuOpen
                ? "-translate-y-[0px] rotate-[45deg] w-5 border-white"
                : "translate-y-2"
            }`}
          />
        </button>
        <div
          className={`absolute flex flex-col justify-between top-0 right-0 bg-green text-white font-montserrat font-medium items-center overflow-hidden transition-all duration-300 ${
            menuOpen ? "w-full" : "w-0"
          } h-full sm:hidden z-50`}
        >
          <Link to="/" className="block w-fit self-start">
            <img
              src="/logo/white_line_no_bg_reframed.png"
              alt="je-logo"
              className="w-42 ms-5 mt-4"
            />
          </Link>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex flex-col gap-4 text-2xl">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <ul className="flex gap-5 mb-4 text-3xl">
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
              <FontAwesomeIcon icon={faXTwitter} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
