/** @format */

"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectItem from "./components/ProjectItem";

const projects = [
  {
    name: "Eventful",
    description: "A mobile app that allows you to create and manage events.",
    image: "/projects/eventful.webp",
    link: "https://eventfulapp.com"
  },
  {
    name: "Master's Academy Bristol Website",
    description:
      "A website for a Kickboxing Martial Arts company based in Bristol.",
    image: "/projects/masters-academy.png",
    link: "https://mastersacademybristol.co.uk"
  },
  {
    name: "Traila",
    description:
      "A mobile app that allows you to create running routes using AI.",
    image: "/projects/traila.png",
    link: "https://apps.apple.com/gb/app/traila/id6746490940"
  },
  {
    name: "FixMyFlat",
    description: "A property management app for landlords and tenants.",
    image: "/projects/fix-my-flat.webp",
    link: "https://apps.apple.com/gb/app/fixmyflat/id6462794202"
  },
  {
    name: "Global Vending Solutions",
    description:
      "A website for a usherrete trays and vending solutions company.",
    image: "/projects/global-vending-solutions.png",
    link: "https://globalvendingsolutions.com/"
  },
  {
    name: "Pump",
    description:
      "A mobile app that allows you to create and manage workout routines in the gym.",
    image: "/projects/pump.webp",
    link: "https://apps.apple.com/cm/app/pump/id6504487050?l=en-GB"
  }
];

export default function Projects() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "white" }}
    >
      <Header />

      <main className="flex flex-col flex-grow p-8 sm:p-8">
        <div>
          <h1
            style={{
              textAlign: "center",
              letterSpacing: "0.2em",
              marginTop: "25px"
            }}
          >
            MY PROJECTS
          </h1>
          <h2 className="mx-10 mb-5" style={{ textAlign: "center" }}>
            Some of the projects I am working on
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
