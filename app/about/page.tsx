const DISCORD = "https://discord.gg/83VwHsTbs";
const G = "#D4AF37";

const glass: React.CSSProperties = {
  background: "#0d0d0d",
  
  
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 20,
};

const methodology = [
  { icon: "📐", num: "01", title: "Market Structure First", desc: "Before any trade, you understand the HTF bias. Bullish or bearish. No ambiguity. Every trade aligns with higher timeframe structure." },
  { icon: "💧", num: "02", title: "Liquidity Drives Everything", desc: "We don't chase breakouts. We study where stop losses are resting and wait for price to sweep those levels before positioning." },
  { icon: "⚡", num: "03", title: "FVGs as Entry Precision", desc: "Fair Value Gaps give us exact entry zones after a liquidity sweep. Not guessing — reading the imbalance left by institutional movement." },
  { icon: "🕗", num: "04", title: "The 8AM ORB Edge", desc: "Our flagship setup. The Opening Range forms 8:00–8:30AM. Wait for the sweep, enter on the FVG, target the opposite liquidity pool." },
  { icon: "🛡️", num: "05", title: "Risk is Non-Negotiable", desc: "Every trade is sized to a fixed percentage of capital. Daily limits. Drawdown rules. No exceptions. The account grows slowly — and stays grown." },
  { icon: "🏦", num: "06", title: "Prop Firm Ready", desc: "The entire system is built to work within prop firm evaluation constraints. Pass your eval and scale to serious capital." },
];

export default function About() {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "inherit", overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{
        paddingTop: 140, paddingBottom: 80, paddingLeft: 24, paddingRight: 24,
        textAlign: "center",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.08), transparent)",
        }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 16 }}>Our Story</p>
          <h1 style={{ fontSize: "clamp(44px,8vw,80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.02, marginBottom: 20 }}>
            Built by a Trader.<br /><span style={{ color: G }}>For Traders.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
            Apex Trading Systems was built on one belief: serious traders deserve serious education — not recycled YouTube content and vague advice.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {[
            "Most trading education is built to sell, not to teach. Courses that promise lambos. Discord servers full of noise. Indicators that don't work. Communities that disappear the moment you need help.",
            "Apex Trading Systems is different. We built this around a single methodology — ICT concepts applied to ES & NQ futures — and a single primary setup: the 8AM Opening Range Breakout.",
            "One instrument. One setup. Studied deeply. That's the edge.",
            "Our curriculum covers everything from TradingView setup to passing prop firm evaluations. 9 modules built to give you the complete picture — not just the entry, but the structure, the liquidity context, the risk framework, and the psychology that makes it all work in live markets.",
            "The community is small by design. We're not here to sell you a seat and disappear. We're here to build traders.",
          ].map((p, i) => (
            <p key={i} style={{
              color: i === 2 ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)",
              fontSize: i === 2 ? 22 : 17,
              fontWeight: i === 2 ? 700 : 400,
              lineHeight: 1.75,
              marginBottom: 28,
              letterSpacing: i === 2 ? "-0.02em" : "normal",
            }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.04), transparent)",
        }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 14 }}>How We Trade</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.04em" }}>The Methodology</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))", gap: 12 }}>
            {methodology.map(item => (
              <div key={item.title} style={{
                background: "#0a0a0a",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px",
                position: "relative" as const,
                overflow: "hidden" as const,
              }}>
                {/* subtle gold top border */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <span style={{ fontSize: 32 }}>{item.icon}</span>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "rgba(212,175,55,0.4)", letterSpacing: "0.1em" }}>{item.num}</span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12, letterSpacing: "-0.02em", color: "#fff" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 16 }}>
            Ready to get started?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, marginBottom: 36 }}>
            Join the community for free. No credit card. No commitment.
          </p>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{
            background: "linear-gradient(135deg, #D4AF37, #F0D060, #C49A28)",
            borderRadius: 999,
            color: "#000",
            fontWeight: 800,
            fontSize: 16,
            padding: "16px 40px",
            textDecoration: "none",
            display: "inline-block",
          }}>
            Join Apex Trading Systems →
          </a>
        </div>
      </section>

    </main>
  );
}
