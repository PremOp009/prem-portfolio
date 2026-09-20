import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const displayFont = Archivo_Black({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prem Patel | Software Builder & Security Explorer",
  description: "Personal portfolio of Prem Patel, a programmer and engineering student exploring software engineering and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sansFont.variable} ${displayFont.variable} ${monoFont.variable} font-sans antialiased selection:bg-brand-highlight selection:text-brand-primary`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

