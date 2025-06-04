/** @format */

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HeaderLink({ href, title, dropdown = null, icon }) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Link */}
      <Link
        href={href}
        className={`hover:text-[#000000] transition-colors "text-black"
          }`}
        style={{
          fontFamily: "var(--font-montserrat-regular)",
          fontWeight: 600,
          alignItems: "center",
          color: isHovered ? "#999999" : "black"
        }}
      >
        <div className="flex flex-row items-center gap-2">
          {icon && <FontAwesomeIcon icon={icon} className="w-4" />}
          <div className="flex flex-col items-start md:items-center">
            <div
              style={{
                width: 10,
                height: 2
              }}
            />
            <p style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {title}
            </p>
            {isActive(href) ? (
              <div
                style={{
                  width: "100%",
                  height: 2,
                  backgroundColor: isHovered ? "#999999" : "black"
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: 2,
                  backgroundColor: "transparent"
                }}
              />
            )}
          </div>

          {dropdown && (
            <FontAwesomeIcon
              icon={faChevronUp}
              style={{
                fontSize: 12,
                color: "#b3b3b3",
                transition: "transform 0.3s ease",
                transform: isHovered ? "rotate(180deg)" : "rotate(0deg)"
              }}
            />
          )}
        </div>
      </Link>

      {dropdown && isHovered && (
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="h-2 w-full absolute"></div>

          <div
            className="mt-2 bg-white shadow-lg pointer-events-auto"
            style={{ borderRadius: 10, borderWidth: 0.5, padding: 5 }}
          >
            {dropdown.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 hover:bg-[#d3d3d3]"
                style={{
                  fontFamily: "var(--font-montserrat-regular)",
                  fontWeight: 600,
                  borderRadius: 10,
                  textAlign: "center",
                  textWrap: "nowrap",
                  color: "black"
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
