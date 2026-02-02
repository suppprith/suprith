import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sequelSans = localFont({
  src: [
    {
      path: "../fonts/sequel-sans-black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/sequel-sans-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/sequel-sans-roman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/sequel-sans-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/sequel-sans-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sequel-sans",
});

export const metadata: Metadata = {
  title: "Suprith",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sequelSans.variable} antialiased font-sequel text-[#F5F1EB] bg-[#F5F1EB]`}
      >
        {children}
      </body>
    </html>
  );
}
