"use client";
import Link from "next/link";

const G = "#D4AF37";

const features = [
  { icon: "📊", title: "P&L Dashboard", desc: "Track daily, weekly, and monthly performance with clean charts and real numbers." },
  { icon: "📈", title: "Win Rate & R:R", desc: "Know your edge. See your win rate, average risk-reward, and profit factor at a glance." },
  { icon: "📝", title: "Trade Journal", desc: "Log every trade with notes, screenshots, and execution quality ratings." },
  { icon: "📂", title: "CSV Import", desc: "Import your Tradovate history in one click. No manual entry needed." },
  { icon: "🎯", title: "Setup Tagging", desc: "Tag trades by setup type — ORB, FVG, Liquidity Sweep — and see what's actually working." },
  { icon: "⚡", title: "ICT Focused", desc: "Built for ICT traders. Supports ES, NQ, MNQ, MES and all micro contracts." },
];

export default function JournalLanding() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "Arial Black, Arial, sans-serif" }}>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 22, letterSpacing: 2 }}>APEX</span>
          <span style={{ color: G, fontWeight: 400, fontSize: 14, letterSpacing: 3 }}>TRADING SYSTEMS</span>
        </Link>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14 }}>← Back to Home</Link>
          <Link href="/journal/dashboard" style={{ background: G, color: "#000", fontWeight: 900, padding: "10px 24px", borderRadius: 999, textDecoration: "none", fontSize: 14 }}>Open Dashboard →</Link>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "120px 40px 80px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ color: G, fontSize: 13, letterSpacing: 6, marginBottom: 20 }}>APEX JOURNAL</div>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 76px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: -2 }}>
          Track Every Trade.<br />
          <span style={{ color: G }}>Master Your Edge.</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 20, lineHeight: 1.7, marginBottom: 48, fontWeight: 400 }}>
          The trade journal built specifically for ICT futures traders. Log your setups, analyze your stats, and find your edge with clarity.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journal/dashboard" style={{ background: G, color: "#000", fontWeight: 900, padding: "18px 44px", borderRadius: 999, textDecoration: "none", fontSize: 18 }}>
            Try It Free →
          </Link>
          <Link href="/journal/pricing" style={{ background: "rgba(255,255,255,0.06)", color: "#fff", fontWeight: 700, padding: "18px 44px", borderRadius: 999, textDecoration: "none", fontSize: 18, border: "1px solid rgba(255,255,255,0.12)" }}>
            See Pricing
          </Link>
        </div>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 14, marginTop: 20 }}>$7/month · Cancel anytime · No setup fees</p>
      </div>

      {/* Features */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1 }}>Everything you need to trade consistently</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {features.map((f) => (
            <div key={f.title} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, padding: "32px",
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
              <div style={{ fontWeight: 900, fontSize: 20, marginBottom: 10 }}>{f.title}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.7, fontWeight: 400 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "80px 40px 120px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <h2 style={{ fontSize: 44, fontWeight: 900, marginBottom: 16, letterSpacing: -1 }}>Start tracking today.</h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, marginBottom: 40, fontWeight: 400 }}>$7/month. Less than a losing trade.</p>
        <Link href="/journal/pricing" style={{ background: G, color: "#000", fontWeight: 900, padding: "20px 60px", borderRadius: 999, textDecoration: "none", fontSize: 20 }}>
          Get Started →
        </Link>
      </div>
    </div>
  );
}
