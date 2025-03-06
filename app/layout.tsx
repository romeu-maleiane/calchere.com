import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full m-0">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full grid grid-rows-[79px_1fr_100px] grid-cols-1 font-sans m-0`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
