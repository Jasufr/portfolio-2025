import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SnsLinks({ variant }) {
  // Use a custom class only for the footer variant
  const ulClass =
    variant === "footer"
      ? "sns-footer-icons flex justify-center gap-3 md:gap-5 mb-4  sm:text-3xl"
      : "flex justify-center gap-5 mb-4  sm:text-3xl";
  return (
    <ul className={ulClass}>
      <li>
        <a href="mailto:juetienne7@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/justin-etienne/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href="https://github.com/Jasufr" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://x.com/jasu_fr" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </li>
    </ul>
  );
}
