"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "white" }}
    >
      <Header />

      <main className="flex flex-col flex-grow p-8 sm:p-8">
        <div>
          <h1 className="text-4xl font-bold">Hi! I am Chris</h1>
          <p className="mt-4 text-lg">
            Welcome to my homepage where I share my projects and interests.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
