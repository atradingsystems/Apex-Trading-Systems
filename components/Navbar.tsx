"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <span className="gold-gradient">APEX</span>
          <span className="text-white ml-2 font-light">TRADING SYSTEMS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-gray-300 hover:text-white transition text-sm">About</Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white transition text-sm">Pricing</Link>
          <Link href="/join" className="bg-gold text-black font-semibold px-5 py-2 rounded text-sm hover:bg-gold-light transition">
            Join Discord
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link href="/about" className="text-gray-300 text-sm" onClick={() => setOpen(false)}>About</Link>
          <Link href="/pricing" className="text-gray-300 text-sm" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/join" className="bg-gold text-black font-semibold px-5 py-2 rounded text-sm text-center" onClick={() => setOpen(false)}>
            Join Discord
          </Link>
        </div>
      )}
    </nav>
  );
}
