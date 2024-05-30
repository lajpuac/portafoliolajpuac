import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
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
        <main className="lg:pl-[13vw] px-5 lg:px-0 container mx-auto py-5 lg:py-8"> 
          {children} 
        </main>
      </body>
    </html>
  );
}
