import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Apex Trading Systems | Futures & Options Trading Course — ES & NQ, ICT & ORB Strategy",
  description: "Learn futures and options trading with a proven ICT & 8AM ORB strategy. Free community access, 9-module course, daily trade alerts, and live mentorship. Start free — no credit card.",
  keywords: ["futures trading course", "options trading course", "ICT trading", "ORB strategy", "ES NQ trading", "trading community", "8AM opening range breakout", "prop firm trading", "options on futures", "Apex Trading Systems"],
  openGraph: {
    title: "Apex Trading Systems | Futures & Options Trading Course",
    description: "Learn futures and options trading with ICT methodology & the 8AM ORB strategy. Free to start — 9-module course, daily alerts, live mentorship.",
    url: "https://www.apextradingsystems.io",
    siteName: "Apex Trading Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Trading Systems | Futures & Options Trading Course",
    description: "Learn futures and options trading with ICT methodology & the 8AM ORB strategy. Free to start — 9-module course, daily alerts, live mentorship.",
  },
  metadataBase: new URL("https://www.apextradingsystems.io"),
  alternates: {
    canonical: "https://www.apextradingsystems.io",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
