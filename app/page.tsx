import Link from "next/link";

const DISCORD = "https://discord.gg/83VwHsTbs";
const G = "#D4AF37";

const glass: React.CSSProperties = {
  background: "#0d0d0d",
  
  
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 20,
};

const glassGold: React.CSSProperties = {
  background: "#120f00",
  
  
  border: "1px solid rgba(212,175,55,0.3)",
  borderRadius: 20,
  boxShadow: "0 0 60px rgba(212,175,55,0.12)",
};

const btnGold: React.CSSProperties = {
  background: "linear-gradient(135deg, #D4AF37, #F0D060, #C49A28)",
  borderRadius: 999,
  border: "none",
  color: "#000",
  fontWeight: 800,
  textDecoration: "none",
  display: "inline-block",
  cursor: "pointer",
};

const btnGlass: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  
  
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 999,
  color: "#fff",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-block",
};

const orb = (w: number, h: number, color: string, style: React.CSSProperties = {}): React.CSSProperties => ({
  position: "absolute",
  width: w,
  height: h,
  borderRadius: "50%",
  background: color,
  filter: "blur(80px)",
  pointerEvents: "none",
  ...style,
});

const features = [
  { icon: "📐", title: "ICT Concepts & Market Structure", desc: "Institutional order flow, BOS, CHoCH, and the liquidity framework that explains every major price move." },
  { icon: "⚡", title: "8AM Opening Range Breakout", desc: "Our primary daily setup on ES & NQ. One window. One strategy. Repeatable edge every session." },
  { icon: "💧", title: "Liquidity & Fair Value Gaps", desc: "See the market how smart money sees it. Hunt sweeps, enter at FVG zones, exit at the next pool." },
  { icon: "🛡️", title: "Risk Management & Journaling", desc: "Position sizing, daily limits, and the journal system that builds real consistency." },
  { icon: "🏦", title: "Prop Firm Funding", desc: "Pass your eval and trade $50K–$150K in funded capital. Full breakdown of Apex Trader and Topstep." },
  { icon: "🧠", title: "Trading Psychology", desc: "Why your brain works against you in live markets — and the frameworks that override it." },
];

const tiers = [
  { name: "Free", price: "$0", period: "", desc: "Get started. No card needed.", features: ["Discord community access", "General chat & market talk", "Modules 0–3 (foundations)", "Rules & orientation"], cta: "Join Free", highlight: false },
  { name: "Apex", price: "$49", period: "/mo", desc: "Full course + daily content.", features: ["Everything in Free", "All 9 course modules", "Daily bias & trade ideas", "Signals & commentary", "Weekly recap & review"], cta: "Get Apex Access", highlight: false },
  { name: "Elite", price: "$149", period: "/mo", desc: "Live alerts & mentorship.", features: ["Everything in Apex", "Live trade alerts", "Elite trade setups", "1-on-1 mentorship", "Weekly voice sessions", "Priority support"], cta: "Go Elite", highlight: true },
  { name: "Course Only", price: "$297", period: " once", desc: "Lifetime module access.", features: ["All 9 course modules", "Lifetime access", "Future updates included", "Course Q&A channel"], cta: "Get Lifetime Access", highlight: false },
];

const testimonials = [
  { name: "Marcus T.", role: "Apex Member", quote: "The ORB strategy alone was worth the membership. Clear, repeatable, and it actually works on ES. Best trading community I've been part of." },
  { name: "Jordan R.", role: "Elite Member", quote: "Seeing the live alerts in real time alongside the education just clicks in a way that solo learning never did." },
  { name: "Devon K.", role: "Course Only", quote: "9 modules of actual substance. The liquidity and FVG modules changed the way I see every chart." },
];

export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "inherit", overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "140px 24px 100px", position: "relative", overflow: "hidden" }}>
        <div style={orb(600, 600, "rgba(212,175,55,0.08)", { top: -150, left: "50%", transform: "translateX(-50%)" })} />
        <div style={orb(350, 350, "rgba(212,175,55,0.04)", { bottom: 0, right: -80 })} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 860 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.05)",   border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "6px 14px", marginBottom: 36 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: G, display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em" }}>ES & NQ &nbsp;·&nbsp; ICT &nbsp;·&nbsp; 8AM ORB</span>
          </div>

          <h1 style={{ fontSize: "clamp(52px, 10vw, 96px)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: 24 }}>
            Master ES & NQ.<br /><span style={{ color: G }}>Trade With Edge.</span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(16px,2.5vw,19px)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 48px" }}>
            ICT concepts, the 8AM ORB strategy, and a community of serious traders built for those who want to trade like professionals.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{ ...btnGold, fontSize: 15, padding: "15px 32px" }}>Join Free →</a>
            <Link href="/pricing" style={{ ...btnGlass, fontSize: 15, padding: "15px 32px" }}>View Pricing</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "40px 24px 80px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
          {[["24+","Members"],["9","Modules"],["ES & NQ","Focused"],["ICT","Method"]].map(([v,l]) => (
            <div key={l} style={{ ...glass, padding: "20px 10px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(20px,4vw,28px)", fontWeight: 900, color: G, letterSpacing: "-0.03em" }}>{v}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 6, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 24px", position: "relative" }}>
        <div style={orb(500, 500, "rgba(212,175,55,0.04)", { top: 0, right: -100 })} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 560, marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 14 }}>The Curriculum</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 16 }}>Everything you need.<br />Nothing you don&apos;t.</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1.65 }}>9 modules. One methodology. Built to take you from zero to funded.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px,1fr))", gap: 10 }}>
            {features.map(f => (
              <div key={f.title} style={{ ...glass, padding: "28px" }}>
                <div style={{ fontSize: 30, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "80px 24px", position: "relative" }}>
        <div style={orb(600, 600, "rgba(212,175,55,0.05)", { bottom: -100, left: "50%", transform: "translateX(-50%)" })} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 14 }}>Membership</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 12 }}>Simple pricing.</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16 }}>Start free. Upgrade anytime. Cancel whenever.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 10 }}>
            {tiers.map(tier => (
              <div key={tier.name} style={{ ...(tier.highlight ? glassGold : glass), position: "relative", padding: "28px", display: "flex", flexDirection: "column" as const }}>
                {tier.highlight && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: G, color: "#000", fontSize: 10, fontWeight: 800, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.1em", textTransform: "uppercase" as const, whiteSpace: "nowrap" as const }}>Most Popular</div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: tier.highlight ? G : "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 10 }}>{tier.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                    <span style={{ fontSize: 44, fontWeight: 900, letterSpacing: "-0.04em" }}>{tier.price}</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>{tier.period}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>{tier.desc}</p>
                </div>
                <ul style={{ flex: 1, listStyle: "none", padding: 0, marginBottom: 24 }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: G, fontSize: 12, marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{ ...(tier.highlight ? btnGold : btnGlass), display: "block", textAlign: "center" as const, padding: "13px 20px", fontSize: 13, color: tier.highlight ? "#000" : "#fff", letterSpacing: "-0.01em" }}>{tier.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 14 }}>Members</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.04em" }}>What traders say.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 10 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ ...glass, padding: "32px" }}>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 24, fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: G, marginTop: 4 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "140px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={orb(700, 700, "rgba(212,175,55,0.06)", { bottom: -200, left: "50%", transform: "translateX(-50%)" })} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(44px,8vw,88px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.02, marginBottom: 20 }}>
            Ready to trade<br /><span style={{ color: G }}>with real edge?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, marginBottom: 48, lineHeight: 1.65 }}>
            Join 24+ traders already inside Apex Trading Systems.<br />Start free — no credit card required.
          </p>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{ ...btnGold, fontSize: 17, padding: "18px 44px" }}>
            Join the Community →
          </a>
        </div>
      </section>

    </main>
  );
}
