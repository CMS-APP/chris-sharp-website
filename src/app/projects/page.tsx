"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Projects() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "white" }}
    >
      <Header />

      <main className="flex flex-col flex-grow p-8 sm:p-8">
        <div>
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="mt-4 text-lg">
            Here are some of the projects I have worked on.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
