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
  title: "Andrew Frenenski | Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer with 14+ years of experience building scalable applications across full-stack, AI/ML, and data engineering.",
  keywords: [
    "Senior Full Stack Engineer",
    "Full Stack",
    "AI/ML",
    "Data Engineering",
    "Python",
    "TypeScript",
    "React",
    "Machine Learning",
    "Austin TX",
    "Microsoft",
    "Google",
  ],
  authors: [{ name: "Andrew Frenenski" }],
  openGraph: {
    title: "Andrew Frenenski | Senior Full Stack Engineer",
    description:
      "Building scalable full-stack platforms, AI/ML systems, and data pipelines.",
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
