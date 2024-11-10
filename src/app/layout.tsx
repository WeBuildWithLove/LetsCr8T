import type { Metadata } from "next";
import { EB_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import { Manrope } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

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
  title: "LetsCr8T",
  description:
    "At LetsCr8T, we craft custom websites and digital experiences that help your business thrive online. Engage your audience, elevate your brand, and drive growth—let’s get started!",

  keywords: [
    "custom websites",
    "web development",
    "web design",
    "mobile app development",
    "branding solutions",
    "UI/UX design",
    "user experience design",
    "digital agency",
    "creative technology",
    "web maintenance",
    "content strategy",
    "web accessibility",
    "visual identity",
    "brand strategy",
    "LetsCr8T",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FF5A12" />
        <link rel="canonical" href="https://letscr8t.xyz" />
      </Head>
      <body
        className={`${poppins.className} ${eb_garamond.className} ${manrope.className} ${urban.variable}  ${grotesk.variable} `}
      >
        {children}
        <Script id="tawk-to-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/672d41da4304e3196adf1118/1ic4ciff3';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
