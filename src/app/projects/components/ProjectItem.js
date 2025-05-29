/** @format */

import Button from "@/components/Button";
import Image from "next/image";

export default function ProjectItem({ project }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        flexDirection: "row",
        backgroundColor: "#d3d3d3",
        padding: "20px",
        borderRadius: "20px"
      }}
    >
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
        <Button
          text="View Website"
          onClick={() => {
            window.location.href = project.link;
          }}
        />
      </div>
    </div>
  );
}
