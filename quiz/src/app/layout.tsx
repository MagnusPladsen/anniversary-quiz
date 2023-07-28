import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1 ÅR SAMMEN",
  description: "FOR PATRYCJA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#FFB1AE"}} className={yeseva.className}>{children}</body>
    </html>
  );
}
