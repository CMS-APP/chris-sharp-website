/** @format */

"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEnvelope,
  faExclamationCircle,
  faPaperPlane,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { useState, FormEvent } from "react";

export default function Contact() {
  const linkedinLink = "https://www.linkedin.com/in/chris-sharp-/";
  const githubLink = "https://github.com/CMS-APP";
  const instagramLink = "https://www.instagram.com/chris.sharpy/";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus("loading");
    setError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
      setStatus("error");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      } else {
        console.log("Message sent successfully!");
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("error");
      setError("Failed to send message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "white" }}
    >
      <Header />

      <main className="flex flex-grow justify-center p-8 md:p-16">
        <div
          className="flex flex-col md:flex-row"
          style={{ gap: "2rem", flex: 1, width: "100%", marginTop: "2rem" }}
        >
          <div className="flex flex-col flex-grow" style={{ flex: 1 }}>
            <h2>Contact Information</h2>

            <p>
              I&apos;m here to help with any questions you have. Feel free to
              contact me via the form or the contact information below.
            </p>

            <div
              className="flex flex-col w-full"
              style={{ gap: "1rem", marginTop: "1rem" }}
            >
              <button
                className="transition-transform flex items-center gap-2.5 w-fit"
                onClick={() => (window.location.href = "tel:+1234567890")}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "var(--primary)", height: "20px" }}
                />
                <h3 style={{ color: "var(--primary)", fontSize: 15 }}>
                  +44 (0)7495 538 185
                </h3>
              </button>

              <button
                className="transition-transform flex items-center gap-2.5 w-fit"
                onClick={() =>
                  (window.location.href = "mailto:example@email.com")
                }
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "var(--primary)", height: "20px" }}
                />
                <h3 style={{ color: "var(--primary)", fontSize: 15 }}>
                  Christopher.sharp@hotmail.co.uk
                </h3>
              </button>

              <button
                className="transition-transform flex items-center gap-2.5 w-fit"
                onClick={() => (window.location.href = linkedinLink)}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "var(--primary)", height: "25px" }}
                />
                <h3 style={{ color: "var(--primary)", fontSize: 15 }}>
                  LinkedIn
                </h3>
              </button>

              <button
                className="transition-transform flex items-center gap-2.5 w-fit"
                onClick={() => (window.location.href = githubLink)}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "var(--primary)", height: "25px" }}
                />
                <h3 style={{ color: "var(--primary)", fontSize: 15 }}>
                  GitHub
                </h3>
              </button>

              <button
                className="transition-transform flex items-center gap-2.5 w-fit"
                onClick={() => (window.location.href = instagramLink)}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "var(--primary)", height: "25px" }}
                />
                <h3 style={{ color: "var(--primary)", fontSize: 15 }}>
                  Instagram
                </h3>
              </button>
            </div>
          </div>

          <div className="widget" style={{ flex: 1, padding: "20px" }}>
            <form
              className="w-full gap-2"
              onSubmit={handleSubmit}
              onClick={(e) => e.preventDefault()}
            >
              <h3 style={{ color: "black" }}>Get In Touch</h3>

              <div className="my-2">
                <label htmlFor="name">Name:</label>
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2"
                  style={{ color: "black", borderRadius: 10, marginTop: 5 }}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2"
                  style={{ color: "black", borderRadius: 10, marginTop: 5 }}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="message">Message:</label>
                <textarea
                  placeholder="Message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2"
                  style={{ color: "black", borderRadius: 10, marginTop: 5 }}
                  required
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="transition-transform p-2 bg-[var(--primary)] hover:bg-[var(--primary)] w-full rounded-[20px] shadow-lg"
              >
                <div className="flex items-center justify-center gap-2">
                  <p className="bold" style={{ color: "white" }}>
                    {status === "loading" ? "Sending..." : "Send"}
                  </p>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ color: "white", height: 15 }}
                  />
                </div>
              </button>

              {error && (
                <div className="mt-4 px-5 py-2 bg-[#950606] text-white rounded-[20px] shadow-lg flex items-center gap-2 justify-center">
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  <p className="text-center text-white bold">Error: {error}</p>
                </div>
              )}

              {status === "success" && (
                <div className="mt-4 px-5 py-2 bg-[#06402B] text-white rounded-[20px] shadow-lg flex items-center gap-2 justify-center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p className="text-center text-white bold">
                    Thank you for your message! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
