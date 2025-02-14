"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const linkedinLink = "https://www.linkedin.com/in/chris-sharp-/";

  return (
    <footer
      className="flex p-4 w-full bg-gray-100"
      style={{
        alignItems: "center",
        zIndex: 1000,
        height: 75,
      }}
    >
      <div
        className="text-gray-700 text-sm"
        style={{
          flex: 1,
          paddingLeft: 10,
          color: "black",
          fontFamily: "var(--font-poppins-regular)",
        }}
      >
        &copy; {new Date().getFullYear()} Chris Sharp
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flex: 1,
          gap: 10,
          paddingRight: 10,
        }}
      >
        <button onClick={() => (window.location = linkedinLink)}>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "var(--primary)", height: "30px" }}
            className="hover:scale-110 transition-transform"
          />
        </button>
      </div>
    </footer>
  );
}
