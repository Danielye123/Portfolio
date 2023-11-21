// import Theme from "@/components/Theme";
// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { NavBar } from "@/components";
// import Head from 'next/head'

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Daniel Ye | Software Developer",
//   description: "Daniel Ye: Software Engineer Digital Portfolio",
//   icons: {
//     icon: "/assets/images/PortfolioLogo2.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.className}`}>
//       <Theme>
//         <body>
//           <NavBar />
//           <div className="">{children}</div>
//         </body>
//       </Theme>
//     </html>
//   );
// }
import Theme from "@/components/Theme";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components";
import Head from "next/head";

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
      <Head>
        <title>Daniel Ye | Software Developer</title>
        <meta
          name="description"
          content="Daniel Ye: Software Engineer Digital Portfolio"
        />
        <link rel="icon" href="/assets/images/PortfolioLogo2.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-danielye123.vercel.app"
        />
        <meta property="og:title" content="Daniel Ye | Software Developer" />
        <meta
          property="og:description"
          content="Daniel Ye: Software Engineer Digital Portfolio"
        />
        <meta
          property="og:image"
          content="/assets/images/portfolio_front_page_resized.png"
        />
      </Head>
      <Theme>
        <body>
          <NavBar />
          <div className="">{children}</div>
        </body>
      </Theme>
    </html>
  );
}
