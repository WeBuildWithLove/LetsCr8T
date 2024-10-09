import type { Metadata } from "next";
import { EB_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/layout";
import localfont from "next/font/local";
import { Manrope } from "next/font/google";

const urban = localfont({
  src: "../../public/fonts/Urban Storm.ttf",
  weight: "400",
  variable: "--font-urban",
});
const grotesk = localfont({
  src: [
    {
      path: "../../public/fonts/BDOGrotesk-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/BDOGrotesk-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/BDOGrotesk-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/BDOGrotesk-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-grotesk",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"], // Specify the weights to include
  subsets: ["latin"], // Optional: define the subset
});

const eb_garamond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"], // Specify the weights to include
  subsets: ["latin"], // Optional: define the subset
});

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Specify the weights to include
  subsets: ["latin"], // Optional: define the subset
});

export const metadata: Metadata = {
  title: "LetsCr8t",
  description:
    "At LetsCr8t, we craft stunning, high-quality websites and web applications for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${eb_garamond.className} ${manrope.className} ${urban.variable}  ${grotesk.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
