import Link from "next/link";

const G = "#D4AF37";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "64px 24px 40px",
      background: "#000",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: G, fontWeight: 900, fontSize: 18, letterSpacing: "-0.02em" }}>APEX</span>
              <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300, fontSize: 13, marginLeft: 8, letterSpacing: "0.05em" }}>TRADING SYSTEMS</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, lineHeight: 1.7, maxWidth: 320 }}>
              A futures trading education platform built around structure, repeatability, and professional-grade execution on MES.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Navigate</div>
            {[["Home", "/"], ["About", "/about"], ["Pricing", "/pricing"], ["Join Discord", "/join"]].map(([label, href]) => (
              <div key={label} style={{ marginBottom: 12 }}>
                <Link href={href} style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none" }}>{label}</Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Community</div>
            {[
              ["Discord", "https://discord.gg/83VwHsTbs"],
              ["X / Twitter", "https://x.com/apextrading00"],
            ].map(([label, href]) => (
              <div key={label} style={{ marginBottom: 12 }}>
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none" }}>{label}</a>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 32,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>© 2026 Apex Trading Systems</p>
          <p style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>Not financial advice. Trade at your own risk.</p>
        </div>
      </div>
    </footer>
  );
}
