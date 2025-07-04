import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import CustomNavbar from "./components/navbar/navbar";
import Script from "next/script";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Adrian Germeck - M.Sc. Software Engineer",
    template: "%s | Adrian Germeck"
  },
  description: "Portfolio von Adrian Germeck, M.Sc. Software Engineer. Spezialisiert auf moderne Webentwicklung mit React, Next.js, TypeScript und mehr. Entdecken Sie meine Projekte und Fähigkeiten.",
  keywords: ["Software Engineer", "Web Developer", "React", "Next.js", "TypeScript", "JavaScript", "Portfolio", "Adrian Germeck"],
  authors: [{ name: "Adrian Germeck" }],
  creator: "Adrian Germeck",
  publisher: "Adrian Germeck",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adrian-germeck.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://adrian-germeck.com',
    title: 'Adrian Germeck - Portfolio & Projekte',
    description: 'Entdecken Sie die Projekte von Adrian Germeck. Von E-Commerce Plattformen bis hin zu mobilen Apps - moderne Webentwicklung mit React, Next.js und TypeScript.',
    siteName: 'Adrian Germeck Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adrian Germeck - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrian Germeck - Portfolio & Projekte',
    description: 'Portfolio von Adrian Germeck, M.Sc. Software Engineer. Spezialisiert auf moderne Webentwicklung.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fb923c" />

      </head>
      <body className={`${notoSans.variable} antialiased`}>
        <CustomNavbar></CustomNavbar>
        {children}
        <Script
          src="https://rybbit.696887.xyz/api/script.js"
          data-site-id="1"
          data-session-replay="true"
          defer
        />
      </body>
    </html>
  );
}
