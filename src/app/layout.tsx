import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chris Sharp | Software Engineer",
  description: "My Personal Website",
};

const poppinsBold = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins-bold",
  weight: "700",
});

const poppinsMedium = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins-medium",
  weight: "500",
});

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
  weight: "300",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsBold.variable} ${poppinsMedium.variable} ${poppinsRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
