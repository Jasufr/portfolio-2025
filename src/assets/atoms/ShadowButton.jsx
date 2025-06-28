import { Link } from "react-router-dom";

export default function ShadowButton({ link, text }) {
  return (
    <Link
      to={link}
      className="shadow-button text-2xl mx-auto px-6 py-3 rounded-full mt-12 text-white bg-green w-fit flex justify-center items-center"
    >
      {text}
    </Link>
  );
}
