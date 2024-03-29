import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Anime List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {children}
        </main>
      </body>
    </html>
  );
}
