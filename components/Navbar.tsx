"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.4s ease",
        padding: "0 20px",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "12px auto 0",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(10,10,10,0.7)" : "rgba(255,255,255,0.04)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: "0 20px",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "0 4px 24px rgba(0,0,0,0.2)",
          transition: "all 0.4s ease",
        }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 0 }}>
            <span style={{ color: "#D4AF37", fontWeight: 900, fontSize: 15, letterSpacing: "0.06em" }}>APEX</span>
            <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500, fontSize: 15, letterSpacing: "0.06em" }}>&nbsp;TRADING SYSTEMS</span>
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {[["About", "/about"], ["Success Stories", "/success"], ["Pricing", "/pricing"]].map(([label, href]) => (
              <Link key={label} href={href} style={{
                color: "rgba(255,255,255,0.55)", fontSize: 14, fontWeight: 500,
                textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.01em",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>
                {label}
              </Link>
            ))}
            <a href="https://discord.gg/83VwHsTbs" target="_blank" rel="noopener noreferrer"
              className="btn-gold"
              style={{
                color: "#000", fontWeight: 700, fontSize: 13,
                padding: "8px 18px", textDecoration: "none",
                letterSpacing: "0.02em",
              }}>
              Join Free
            </a>
          </div>

          {/* Mobile burger */}
          <button className="nav-mobile" onClick={() => setOpen(!open)} style={{
            background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            maxWidth: 1100, margin: "8px auto 0",
            background: "rgba(10,10,10,0.85)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "20px",
            display: "flex", flexDirection: "column", gap: 16,
          }}>
            {[["About", "/about"], ["Success Stories", "/success"], ["Pricing", "/pricing"]].map(([label, href]) => (
              <Link key={label} href={href} style={{ color: "#fff", fontSize: 16, textDecoration: "none" }} onClick={() => setOpen(false)}>{label}</Link>
            ))}
            <a href="https://discord.gg/83VwHsTbs" target="_blank" rel="noopener noreferrer"
              className="btn-gold"
              style={{ color: "#000", fontWeight: 700, padding: "13px 20px", textDecoration: "none", textAlign: "center", fontSize: 15 }}
              onClick={() => setOpen(false)}>
              Join Free →
            </a>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
        @media (min-width: 641px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
