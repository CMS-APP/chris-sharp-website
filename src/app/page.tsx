/** @format */

"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "white" }}
    >
      <Header />

      <main className="flex flex-col flex-grow p-8 sm:p-8">
        <div style={{ marginTop: "50px" }}>
          <div style={{ position: "relative" }}>
            <Image
              src="/chris-pic.webp"
              alt="Chris Sharp"
              width={300}
              height={300}
              className="rounded-full"
              style={{ margin: "0 auto" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                zIndex: 1
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  letterSpacing: "0.2em",
                  color: "black",
                  textShadow: "2px 2px 4px rgba(255,255,255,0.5)"
                }}
              >
                CHRIS SHARP
              </h2>
            </div>
          </div>

          <h1
            style={{
              textAlign: "center",
              letterSpacing: "0.2em",
              marginTop: "25px"
            }}
          >
            APP DEVELOPER & SOFTWARE ENGINEER
          </h1>

          <p className="mx-10 my-5 text-lg" style={{ textAlign: "center" }}>
            Welcome to my page. I&apos;m a software engineer and app developer
            with a passion for building applications that are both functional
            and aesthetically pleasing. I&apos;m currently working as a data
            scientist at{" "}
            <a
              href="https://www.hvn-labs.com"
              target="_blank"
              style={{ color: "black", textDecoration: "underline" }}
            >
              {`HVN-Labs`}
            </a>{" "}
            and I&apos;m a self-taught app developer.
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "20px"
            }}
          >
            <Button
              text="Contact"
              onClick={() => {
                window.location.href = "/contact";
              }}
            />
            <Button
              text="Projects"
              onClick={() => {
                window.location.href = "/projects";
              }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
