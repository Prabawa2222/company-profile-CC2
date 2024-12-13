import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const interLight = localFont({
  src: "./fonts/Inter-Light.woff",
  variable: "--font-inter-light",
});
const interRegular = localFont({
  src: "./fonts/Inter-Regular.ttf",
  variable: "--font-inter-regular",
});

const polyItalic = localFont({
  src: "./fonts/Poly-Italic.woff",
  variable: "--font-poly-Italic",
});

const polyRegular = localFont({
  src: "./fonts/Poly-Regular.woff",
  variable: "--font-poly-regular",
});

const archivoExtraBold = localFont({
  src: "./fonts/Archivo-ExtraBold.ttf",
  variable: "--font-archivo-extra-bold",
});

export const metadata: Metadata = {
  title: "Dice Agri",
  description: "Cultivating the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interRegular.variable} ${interLight.variable} ${polyItalic.variable} ${polyRegular.variable} ${archivoExtraBold.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
