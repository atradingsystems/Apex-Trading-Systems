import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      background: "#000",
      fontFamily: "inherit",
    }}>

      {/* Risk Disclaimer */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "28px 24px",
        textAlign: "center",
        maxWidth: 800,
        margin: "0 auto",
      }}>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.75 }}>
          <strong style={{ color: "rgba(255,255,255,0.8)" }}>Risk Disclaimer:</strong> Trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. The content provided is for educational purposes only and should not be considered financial advice. Always do your own research and consult with a licensed financial advisor.
        </p>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: "#D4AF37", fontWeight: 900, fontSize: 16, letterSpacing: "0.04em" }}>APEX</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400, fontSize: 14, marginLeft: 8, letterSpacing: "0.04em" }}>TRADING SYSTEMS</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, lineHeight: 1.75, maxWidth: 300 }}>
              A futures trading education platform built around structure, repeatability, and professional-grade execution on ES & NQ.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 20 }}>Navigate</div>
            {[["Home", "/"], ["About", "/about"], ["Pricing", "/pricing"], ["Join Discord", "/join"]].map(([label, href]) => (
              <div key={label} style={{ marginBottom: 14 }}>
                <Link href={href} style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none" }}>{label}</Link>
              </div>
            ))}
          </div>

          {/* Community */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 20 }}>Community</div>
            <div style={{ marginBottom: 14 }}>
              <a href="https://discord.gg/a9fJRsH3us" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none" }}>Discord</a>
            </div>
            <div style={{ marginBottom: 14 }}>
              <a href="https://x.com/apextrading00" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none" }}>X / Twitter</a>
            </div>
            <div style={{ marginBottom: 14 }}>
              <a href="https://www.instagram.com/apextradingsystems" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none" }}>Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap" as const,
          gap: 8,
        }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>© 2026 Apex Trading Systems. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>Educational purposes only. Not financial advice.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
