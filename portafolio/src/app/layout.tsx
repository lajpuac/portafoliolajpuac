import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import Lateral from "./components/shared/lateral";
import { ReactNode } from "react";
import { cn } from "../../libs/utils";

const font = Arimo({ subsets: ['latin'] });

export const metadata = {
  title: "Portafolio",
  description: "Mi portafolio",
};

export default function RootLayout({
  children
}: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('bg-background text-gray-300', font.className)}>
        <Lateral />
        <main className="pl-[13vw]"> {children} </main>
      </body>
    </html>
  );
}
