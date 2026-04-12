import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "@/components/Navbar"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanu Shree",
  description: "Full stack developer building products end-to-end.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="
          min-h-full flex flex-col
          bg-[#F5F7F5] text-[#1E1E1E]
          font-sans
        "
      >
        <ThemeProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}