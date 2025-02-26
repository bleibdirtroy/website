import type { Metadata } from "next";
import {  Noto_Sans } from "next/font/google";
import "./globals.css";
import CustomNavbar from "./components/navbar/navbar";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrian Germeck - M.Sc. Software Engineer",
  description: "My World of Software Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <CustomNavbar></CustomNavbar>
        {children}
      </body>
    </html>
  );
}
