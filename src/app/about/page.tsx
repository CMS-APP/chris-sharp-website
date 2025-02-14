"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "white" }}
    >
      <Header />

      <main className="flex flex-col flex-grow p-8 sm:p-8">
        <div>
          <h1 className="text-4xl font-bold">Get To Know Me</h1>
          <p className="mt-4 text-lg">
            I am a software engineer who enjoys building things with code. I
            have experience with full-stack web development and mobile
            application development. I am passionate about learning new
            technologies and sharing my knowledge with others.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
