import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";

import "./globals.css";

const nunito = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
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
      className={`${nunito.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
          <div className="max-w-4xl mx-auto px-8 py-4 flex justify-center gap-8 text-sm">
            <a href="#about" className="text-muted hover:text-accent transition-colors">About</a>
            <a href="#resume" className="text-muted hover:text-accent transition-colors">Resume</a>
            <a href="#projects" className="text-muted hover:text-accent transition-colors">Projects</a>
            <a href="#interests" className="text-muted hover:text-accent transition-colors">Interests</a>
            <a href="#socials" className="text-muted hover:text-accent transition-colors">Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}