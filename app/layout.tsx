import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apex Trading Systems | MES Futures Trading Community",
  description: "Master MES futures trading with ICT concepts and the 8AM ORB strategy. Join a community of serious traders with live alerts, mentorship, and a 9-module course.",
  keywords: "MES futures, ICT trading, ORB strategy, futures trading community, trading education",
  openGraph: {
    title: "Apex Trading Systems",
    description: "Master MES Futures. Trade With Edge.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
