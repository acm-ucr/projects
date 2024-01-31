/* eslint-disable new-cap */
//import { useState } from "react";
import Navigation from "@/components/Navigation";
import Tag from "@/components/Tag";
import "./globals.css";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navigation></Navigation>
      <div className="h-screen w-screen flex items-center justify-center"></div>
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
