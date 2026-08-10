import type { Metadata } from "next";
import { Bungee, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { Analytics } from "@vercel/analytics/next";

const bungee = Bungee({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sourodeep Roy",
  description: "Portfolio — RAG and agentic systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bungee.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}