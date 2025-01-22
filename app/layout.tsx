import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tanyitiku Percy - Portfolio",
  description: "Explore the portfolio of Tanyitiku Percy, a skilled developer proficient in Next.js, showcasing projects and solutions.",
  keywords: "Tanyitiku Percy,Tansolution, portfolio, Next.js, web development, projects, solutions",
  authors: [{name:"Tanyitiku Percy"},{name:"TanSolution"}],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="MkAKKGuGMaUOlw1VnnwTY7eBedfxyQOWmn37bmHiu_4" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://tansolution.vercel.app/" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=YourFontChoice" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <script></script>
      </body>
    </html>
  );
}