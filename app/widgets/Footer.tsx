import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-20 flex flex-col items-center gap-10 bg-this-green-400">
      <span className="text-this-green-500 text-4xl font-extrabold font-[barlow]">
        sunnyside
      </span>
      <ul className="flex gap-14">
        <li>
          <a
            href="#"
            className="text-this-green-500 font-[barlow] hover:text-this-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-this-green-500 font-[barlow] hover:text-this-white"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-this-green-500 font-[barlow] hover:text-this-white"
          >
            Projects
          </a>
        </li>
      </ul>
      <div className="mt-12 flex gap-8">
        <a href="#" aria-label="Facebook">
          <FaFacebookSquare className="text-this-green-500 text-3xl hover:text-this-white" />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram className="text-this-green-500 text-3xl hover:text-this-white" />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter className="text-this-green-500 text-3xl hover:text-this-white" />
        </a>
        <a href="#" aria-label="Pinterest">
          <FaPinterest className="text-this-green-500 text-3xl hover:text-this-white" />
        </a>
      </div>
      <div className="text-this-green-500 text-sm self-center">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="hover:text-this-white"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/vitorbrunobueno"
          className="hover:text-this-white"
        >
          Vitor Bruno
        </a>
        .
      </div>
    </footer>
  );
}
