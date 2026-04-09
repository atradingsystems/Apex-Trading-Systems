"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      transition: "all 0.3s ease",
      padding: "0 24px",
    }}>
      <nav style={{
        maxWidth: 1200, margin: "0 auto",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>
          <span style={{ color: "#D4AF37", fontWeight: 900, fontSize: 16, letterSpacing: "0.05em" }}>APEX </span>
          <span style={{ color: "#fff", fontWeight: 600, fontSize: 16, letterSpacing: "0.05em" }}>TRADING SYSTEMS</span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          <Link href="/about" style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
            About
          </Link>
          <Link href="/pricing" style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
            Pricing
          </Link>
          <a href="https://discord.gg/83VwHsTbs" target="_blank" rel="noopener noreferrer" style={{
            background: "#D4AF37", color: "#000", fontWeight: 700,
            padding: "8px 20px", borderRadius: 980, fontSize: 13,
            textDecoration: "none", letterSpacing: "-0.01em",
          }}>
            Join Free
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="show-mobile" style={{
          background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 8,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </nav>

      {open && (
        <div style={{
          background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)",
          padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          <Link href="/about" style={{ color: "#fff", fontSize: 16, textDecoration: "none" }} onClick={() => setOpen(false)}>About</Link>
          <Link href="/pricing" style={{ color: "#fff", fontSize: 16, textDecoration: "none" }} onClick={() => setOpen(false)}>Pricing</Link>
          <a href="https://discord.gg/83VwHsTbs" target="_blank" rel="noopener noreferrer" style={{
            background: "#D4AF37", color: "#000", fontWeight: 700,
            padding: "12px 20px", borderRadius: 8, fontSize: 15,
            textDecoration: "none", textAlign: "center",
          }} onClick={() => setOpen(false)}>
            Join Free →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 641px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
