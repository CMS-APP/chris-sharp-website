"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "white" }}
    >
      <Header />

      <main className="flex flex-col flex-grow p-8 sm:p-8">
        <div>
          <h1 className="text-4xl font-bold">Contact Me!</h1>
          <p className="mt-4 text-lg">
            If you would like to get in touch, feel free to reach out!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
