import type { Metadata } from "next";
import "./globals.scss";
import { Inter } from "next/font/google";
import LevelContextProvider from "@/utils/providers/LevelContextProvider/LevelContextProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Millionaire Quiz",
    template: "Millionaire Quiz | %s",
  },
  description: "Answer questions - win one million! Millionaire Quiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <LevelContextProvider>
        <body>{children}</body>
      </LevelContextProvider>
    </html>
  );
}
