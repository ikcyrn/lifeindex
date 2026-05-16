import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@workspace/ui/lib/utils";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "lifeindex",
  description: "lifeindex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", manrope.variable)}>
      <body>{children}</body>
    </html>
  );
}
