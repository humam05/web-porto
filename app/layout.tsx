import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_JP, Pretendard } from 'next/font/google';
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });
const font = Noto_Sans_JP({
  subsets: ['latin', 'japanese'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Portofolio | Fata Humam Asadillah",
  description: "Web developer & creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
