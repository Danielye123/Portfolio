import Theme from "@/components/Theme";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Ye | Software Developer",
  description: "Daniel Ye: Software Engineer Digital Portfolio",
  icons: {
    icon: "/assets/images/PortfolioLogo2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <Theme>
        <body>
          <NavBar />
          <div className="">{children}</div>
        </body>
      </Theme>
    </html>
  );
}
