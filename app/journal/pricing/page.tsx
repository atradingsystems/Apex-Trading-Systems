"use client";
import Link from "next/link";

const G = "#D4AF37";

export default function JournalPricing() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "Arial Black, Arial, sans-serif" }}>
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 22, letterSpacing: 2 }}>APEX</span>
          <span style={{ color: G, fontWeight: 400, fontSize: 14, letterSpacing: 3 }}>TRADING SYSTEMS</span>
        </Link>
        <Link href="/journal/dashboard" style={{ background: G, color: "#000", fontWeight: 900, padding: "10px 24px", borderRadius: 999, textDecoration: "none", fontSize: 14 }}>Open Dashboard →</Link>
      </nav>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "100px 40px", textAlign: "center" }}>
        <div style={{ color: G, fontSize: 13, letterSpacing: 5, marginBottom: 16 }}>APEX JOURNAL</div>
        <h1 style={{ fontSize: 54, fontWeight: 900, letterSpacing: -2, marginBottom: 16 }}>Simple pricing.</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 20, fontWeight: 400, marginBottom: 60 }}>Less than a losing trade per month.</p>

        <div style={{ background: "rgba(212,175,55,0.06)", border: "2px solid rgba(212,175,55,0.4)", borderRadius: 28, padding: "48px", marginBottom: 32 }}>
          <div style={{ color: G, fontSize: 13, letterSpacing: 5, marginBottom: 12 }}>FULL ACCESS</div>
          <div style={{ fontSize: 80, fontWeight: 900, letterSpacing: -4, lineHeight: 1 }}>$7</div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, fontWeight: 400, marginBottom: 40 }}>/month · Cancel anytime</div>

          {[
            "Unlimited trade logging",
            "P&L dashboard & charts",
            "Win rate & R:R analytics",
            "Setup tagging & filtering",
            "Tradovate CSV import",
            "Trade journal with notes",
            "Mobile friendly",
            "New features as they ship",
          ].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, textAlign: "left" }}>
              <span style={{ color: G, fontSize: 20 }}>✓</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, fontWeight: 400 }}>{f}</span>
            </div>
          ))}

          <button
            onClick={() => alert("Stripe checkout coming soon!")}
            style={{ background: G, color: "#000", fontWeight: 900, padding: "20px", borderRadius: 14, border: "none", cursor: "pointer", fontSize: 20, width: "100%", marginTop: 24 }}
          >
            Get Started →
          </button>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, marginTop: 16 }}>No contracts. Cancel anytime.</p>
        </div>

        <Link href="/journal" style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, textDecoration: "none" }}>← Back to Journal</Link>
      </div>
    </div>
  );
}
