/** @format */

"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const linkedinLink = "https://www.linkedin.com/in/chris-sharp-/";
  const githubLink = "https://github.com/CMS-APP";
  const instagramLink = "https://www.instagram.com/chris.sharpy/";

  return (
    <footer
      className="flex p-4 w-full bg-[var(--primary)]"
      style={{
        alignItems: "center",
        zIndex: 1000,
        height: 75
      }}
    >
      <div
        style={{
          flex: 1,
          paddingLeft: 10,
          color: "white",
          fontFamily: "var(--font-poppins-regular)"
        }}
      >
        &copy; {new Date().getFullYear()} Chris Sharp
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flex: 1,
          gap: 20,
          paddingRight: 10
        }}
      >
        <button onClick={() => (window.location = linkedinLink)}>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "white", height: "30px" }}
            className="hover:scale-110 transition-transform"
          />
        </button>

        <button onClick={() => (window.location = githubLink)}>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "white", height: "30px" }}
            className="hover:scale-110 transition-transform"
          />
        </button>

        <button onClick={() => (window.location = instagramLink)}>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "white", height: "30px" }}
            className="hover:scale-110 transition-transform"
          />
        </button>
      </div>
    </footer>
  );
}
