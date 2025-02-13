import type { Metadata, Viewport } from "next";
import type React from "react"; // Import React
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TopBar from "@/components/top-bar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Union Peace & Development Party",
  description: "Official website of the Union Peace & Development Party",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <TopBar />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
