import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/customCursor";

// AlmarenaNeue Fonts
const almarenaRegular = localFont({
  src: "../public/fonts/AlmarenaNeueDisplay-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-almarena-regular",
});

const almarenaBold = localFont({
  src: "../public/fonts/AlmarenaNeue-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-almarena-bold",
});

const almarenaSemiBold = localFont({
  src: "../public/fonts/AlmarenaNeueDisplay-SemiBold.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-almarena-semibold",
});
const almarenaMedium = localFont({
  src: "../public/fonts/AlmarenaNeueDisplay-Medium.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-almarena-medium",
});

const almarenaLight = localFont({
  src: "../public/fonts/AlmarenaNeueDisplay-Light.woff2",
  weight: "300",
  style: "normal",
  variable: "--font-almarena-light",
});

// const almarenaThin = localFont({
//   src: "../public/fonts/AlmarenaNeueDisplay-Thin.woff2",
//   weight: "200",
//   style: "normal",
//   variable: "--font-almarena-thin",
// });

// Italic Variants
const almarenaRegularItalic = localFont({
  src: "../public/fonts/AlmarenaNeueDisplay-RegularItalic.woff2",
  weight: "400",
  style: "italic",
  variable: "--font-almarena-regular-italic",
});

const almarenaBoldItalic = localFont({
  src: "../public/fonts/AlmarenaNeue-BoldItalic.woff2",
  weight: "700",
  style: "italic",
  variable: "--font-almarena-bold-italic",
});

const almarenaLightItalic = localFont({
  src: "../public/fonts/AlmarenaNeueDisplay-LightItalic.woff2",
  weight: "300",
  style: "italic",
  variable: "--font-almarena-light-italic",
});

// HelveticaNeue Fonts
const helveticaRegular = localFont({
  src: "../public/fonts/HelveticaNeue-Roman.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-helvetica-regular",
});

const helveticaBold = localFont({
  src: "../public/fonts/HelveticaNeue-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-helvetica-bold",
});

const helveticaSemiBold = localFont({
  src: "../public/fonts/HelveticaNeue-Medium.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-helvetica-semibold",
});

const helveticaLight = localFont({
  src: "../public/fonts/HelveticaNeue-Light.woff2",
  weight: "300",
  style: "normal",
  variable: "--font-helvetica-light",
});

const helveticaThin = localFont({
  src: "../public/fonts/HelveticaNeue-Thin.woff2",
  weight: "200",
  style: "normal",
  variable: "--font-helvetica-thin",
});

// Italic Variants
const helveticaRegularItalic = localFont({
  src: "../public/fonts/HelveticaNeueItalic.woff2",
  weight: "400",
  style: "italic",
  variable: "--font-helvetica-regular-italic",
});

const helveticaBoldItalic = localFont({
  src: "../public/fonts/HelveticaNeueBoldItalic.woff2",
  weight: "700",
  style: "italic",
  variable: "--font-helvetica-bold-italic",
});

const helveticaLightItalic = localFont({
  src: "../public/fonts/HelveticaNeueLightItalic.woff2",
  weight: "300",
  style: "italic",
  variable: "--font-helvetica-light-italic",
});

const helveticaThinItalic = localFont({
  src: "../public/fonts/HelveticaNeueThinItalic.woff2",
  weight: "200",
  style: "italic",
  variable: "--font-helvetica-thin-italic",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kazi Desk Pos",
  description:
    "Our goal is to make business operations better. Whether you're processing sales, managing inventory, or tracking transactions, Kazi POS simplifies it all for you.",
};

export default function NavLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${almarenaRegular.variable} ${almarenaBold.variable} ${almarenaSemiBold.variable} ${almarenaMedium.variable} ${almarenaLight.variable} ${almarenaRegularItalic.variable} ${almarenaBoldItalic.variable} ${almarenaLightItalic.variable} ${helveticaRegular.variable} ${helveticaBold.variable} ${helveticaSemiBold.variable} ${helveticaLight.variable} ${helveticaThin.variable} ${helveticaRegularItalic.variable} ${helveticaBoldItalic.variable} ${helveticaLightItalic.variable} ${helveticaThinItalic.variable}`}
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Cursor />
      </body>
    </html>
  );
}
