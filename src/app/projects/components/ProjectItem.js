/** @format */

import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ project }) {
  return (
    <Link href={project.link}>
      <div className="widget flex flex-row items-center">
        <Image
          src={project.image}
          alt={project.name}
          width={100}
          height={100}
          style={{ borderRadius: "20px" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>{project.name}</h2>
          <p style={{ marginBottom: "5px" }}>{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
