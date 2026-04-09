import Link from "next/link";

const DISCORD = "https://discord.gg/83VwHsTbs";

const features = [
  { icon: "📐", title: "ICT Concepts & Market Structure", desc: "Learn how institutional order flow drives price. Master liquidity, BOS, and CHoCH." },
  { icon: "⚡", title: "8AM Opening Range Breakout", desc: "Our primary daily setup. One window. One strategy. Repeatable edge every session." },
  { icon: "💧", title: "Liquidity & Fair Value Gaps", desc: "See the market the way smart money sees it. Hunt sweeps, trade FVGs with precision." },
  { icon: "🛡️", title: "Risk Management & Journaling", desc: "Position sizing, drawdown limits, and the journaling system that builds consistency." },
  { icon: "🏦", title: "Prop Firm Funding & Scaling", desc: "Pass your eval and trade institutional capital. We cover Apex Trader, Topstep, and more." },
  { icon: "📚", title: "9-Module Curriculum", desc: "From TradingView setup to funded accounts. A structured path that builds real edge." },
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    desc: "Start here. No credit card.",
    features: ["Discord community", "General chat & market talk", "Modules 0–3 (foundations)", "Rules & guidelines"],
    cta: "Join Free",
    href: DISCORD,
    highlight: false,
  },
  {
    name: "Apex Member",
    price: "$49",
    period: "/mo",
    desc: "Full course + daily signals.",
    features: ["Everything in Free", "All 9 course modules", "Daily bias & trade ideas", "Signals & commentary", "Weekly recap & review"],
    cta: "Get Apex Access",
    href: DISCORD,
    highlight: false,
  },
  {
    name: "Elite",
    price: "$149",
    period: "/mo",
    desc: "Live alerts & mentorship.",
    features: ["Everything in Apex", "Live trade alerts", "Elite trade setups", "1-on-1 mentorship", "Weekly voice sessions", "Priority support"],
    cta: "Go Elite",
    href: DISCORD,
    highlight: true,
  },
  {
    name: "Course Only",
    price: "$297",
    period: " one-time",
    desc: "Lifetime module access.",
    features: ["All 9 course modules", "Lifetime access", "Future updates included", "Course Q&A channel"],
    cta: "Get Lifetime Access",
    href: DISCORD,
    highlight: false,
  },
];

const testimonials = [
  { name: "Marcus T.", role: "Apex Member", text: "The ORB strategy alone was worth the membership. Clear, repeatable, and it actually works on MES." },
  { name: "Jordan R.", role: "Elite Member", text: "Seeing the live alerts in real time alongside the education clicks in a way solo learning never did." },
  { name: "Devon K.", role: "Course Only", text: "9 modules of actual content — not fluff. The liquidity module opened my eyes. Finally understand why price moves." },
];

export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "'Inter', sans-serif" }}>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        background: "radial-gradient(ellipse at top, #1a1400 0%, #000 60%)",
        position: "relative",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            border: "1px solid #D4AF3766",
            color: "#D4AF37",
            fontSize: 11,
            fontWeight: 700,
            padding: "6px 18px",
            borderRadius: 999,
            marginBottom: 32,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}>
            MES Futures · ICT · 8AM ORB
          </div>
          <h1 style={{ fontSize: "clamp(48px, 10vw, 88px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>
            Master MES Futures.<br />
            <span style={{ color: "#D4AF37" }}>Trade With Edge.</span>
          </h1>
          <p style={{ color: "#888", fontSize: 18, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px" }}>
            ICT concepts, 8AM ORB strategy, and a community of serious traders. Built for those who want to trade like professionals.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{
              background: "#D4AF37",
              color: "#000",
              fontWeight: 800,
              padding: "16px 36px",
              borderRadius: 8,
              fontSize: 16,
              textDecoration: "none",
              display: "inline-block",
            }}>
              Join Free →
            </a>
            <Link href="/pricing" style={{
              border: "1px solid #ffffff33",
              color: "#fff",
              fontWeight: 600,
              padding: "16px 36px",
              borderRadius: 8,
              fontSize: 16,
              textDecoration: "none",
              display: "inline-block",
            }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ borderTop: "1px solid #ffffff15", borderBottom: "1px solid #ffffff15", padding: "28px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, textAlign: "center" }}>
          {[
            { v: "24+", l: "Members" },
            { v: "9", l: "Modules" },
            { v: "MES", l: "Futures" },
            { v: "ICT", l: "Methodology" },
          ].map(s => (
            <div key={s.l}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#D4AF37" }}>{s.v}</div>
              <div style={{ fontSize: 11, color: "#666", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE TEACH */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 900, marginBottom: 16 }}>What You&apos;ll Learn</h2>
            <p style={{ color: "#888", maxWidth: 480, margin: "0 auto" }}>A complete system — from TradingView setup to passing a prop firm eval. No fluff. Pure price action.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {features.map(f => (
              <div key={f.title} style={{
                background: "#0d0d0d",
                border: "1px solid #ffffff15",
                borderRadius: 16,
                padding: "28px",
                transition: "border-color 0.2s",
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "100px 24px", background: "#050505", borderTop: "1px solid #ffffff10" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 900, marginBottom: 16 }}>Simple Pricing</h2>
            <p style={{ color: "#888" }}>Start free. Upgrade when you&apos;re ready. Cancel anytime.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
            {tiers.map(tier => (
              <div key={tier.name} style={{
                background: tier.highlight ? "#1a1200" : "#0d0d0d",
                border: tier.highlight ? "2px solid #D4AF37" : "1px solid #ffffff15",
                borderRadius: 16,
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}>
                {tier.highlight && (
                  <div style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#D4AF37",
                    color: "#000",
                    fontSize: 10,
                    fontWeight: 900,
                    padding: "4px 14px",
                    borderRadius: 999,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}>Most Popular</div>
                )}
                <h3 style={{ fontWeight: 700, fontSize: 18, color: tier.highlight ? "#D4AF37" : "#fff", marginBottom: 8 }}>{tier.name}</h3>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 40, fontWeight: 900 }}>{tier.price}</span>
                  <span style={{ color: "#666", fontSize: 14 }}>{tier.period}</span>
                </div>
                <p style={{ color: "#666", fontSize: 13, marginBottom: 20 }}>{tier.desc}</p>
                <ul style={{ flex: 1, listStyle: "none", padding: 0, marginBottom: 24 }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10, fontSize: 14, color: "#ccc" }}>
                      <span style={{ color: "#D4AF37", marginTop: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={tier.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                  background: tier.highlight ? "#D4AF37" : "transparent",
                  color: tier.highlight ? "#000" : "#fff",
                  border: tier.highlight ? "none" : "1px solid #ffffff30",
                }}>
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 900, textAlign: "center", marginBottom: 64 }}>What Members Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{
                background: "#0d0d0d",
                border: "1px solid #ffffff15",
                borderRadius: 16,
                padding: 28,
              }}>
                <p style={{ color: "#aaa", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                <div style={{ color: "#D4AF37", fontSize: 12, marginTop: 4 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        padding: "120px 24px",
        textAlign: "center",
        background: "radial-gradient(ellipse at bottom, #1a1400 0%, #000 60%)",
        borderTop: "1px solid #ffffff10",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(36px, 8vw, 72px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Ready to trade with<br />
            <span style={{ color: "#D4AF37" }}>real edge?</span>
          </h2>
          <p style={{ color: "#888", fontSize: 18, marginBottom: 40 }}>
            Join 24+ traders already inside Apex Trading Systems. Start free — no credit card required.
          </p>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block",
            background: "#D4AF37",
            color: "#000",
            fontWeight: 900,
            padding: "20px 48px",
            borderRadius: 8,
            fontSize: 18,
            textDecoration: "none",
          }}>
            Join the Community →
          </a>
        </div>
      </section>

    </main>
  );
}
