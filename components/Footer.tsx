import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "80px 24px 40px",
      background: "#000",
      fontFamily: "inherit",
    }}>
      <style>{`
        .footer-link { color: rgba(255,255,255,0.4) !important; text-decoration: none !important; font-size: 14px; transition: color 0.2s; }
        .footer-link:hover { color: rgba(255,255,255,0.8) !important; }
        .footer-label { font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.25); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 20px; }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-brand { grid-column: 1 / -1; }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 64,
          marginBottom: 64,
        }}>
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: "#D4AF37", fontWeight: 900, fontSize: 17, letterSpacing: "-0.02em" }}>APEX</span>
              <span style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300, fontSize: 13, marginLeft: 8, letterSpacing: "0.05em" }}>TRADING SYSTEMS</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, lineHeight: 1.75, maxWidth: 300 }}>
              A futures trading education platform built around structure, repeatability, and professional-grade execution on ES & NQ.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="footer-label">Navigate</div>
            {[["Home", "/"], ["About", "/about"], ["Pricing", "/pricing"], ["Join Discord", "/join"]].map(([label, href]) => (
              <div key={label} style={{ marginBottom: 14 }}>
                <Link href={href} className="footer-link">{label}</Link>
              </div>
            ))}
          </div>

          {/* Community */}
          <div>
            <div className="footer-label">Community</div>
            <div style={{ marginBottom: 14 }}>
              <a href="https://discord.gg/83VwHsTbs" target="_blank" rel="noopener noreferrer" className="footer-link">Discord</a>
            </div>
            <div style={{ marginBottom: 14 }}>
              <a href="https://x.com/apextrading00" target="_blank" rel="noopener noreferrer" className="footer-link">X / Twitter</a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>© 2026 Apex Trading Systems</p>
          <p style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>Not financial advice. Trade at your own risk.</p>
        </div>
      </div>
    </footer>
  );
}
