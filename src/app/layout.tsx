import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Andrew Frenenski | Senior Software Engineer",
  description:
    "Senior Software Engineer with 14+ years of experience building scalable full-stack applications with .NET, React, SQL Server, and Azure.",
  keywords: [
    "Senior Software Engineer",
    ".NET",
    "React",
    "TypeScript",
    "Azure",
    "Full Stack",
    "Austin TX",
  ],
  authors: [{ name: "Andrew Frenenski" }],
  openGraph: {
    title: "Andrew Frenenski | Senior Software Engineer",
    description:
      "Building scalable full-stack applications with .NET, React, SQL Server, and Azure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
