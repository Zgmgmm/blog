import { Inter } from "next/font/google";
import { Pacifico, Lobster } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"], variable: '--font-pacifico' });
const lobster = Lobster({ weight: "400", subsets: ["latin"], variable: '--font-lobster' });

export const metadata: Metadata = {
  title: "Your Name - Personal Website",
  description: "Personal website of Your Name",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}   ${pacifico.variable} ${lobster.variable}  `}>{children}</body>
    </html>
  );
}