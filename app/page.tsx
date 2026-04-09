import Link from "next/link";

const DISCORD = "https://discord.gg/83VwHsTbs";

const G = "#D4AF37"; // gold

const features = [
  { icon: "📐", title: "ICT Concepts & Market Structure", desc: "Learn how institutional order flow drives price. Master liquidity, BOS, CHoCH, and the concepts that actually explain price movement." },
  { icon: "⚡", title: "8AM Opening Range Breakout", desc: "Our primary daily setup. One window. One strategy. Repeatable edge every single session on MES futures." },
  { icon: "💧", title: "Liquidity & Fair Value Gaps", desc: "See the market the way smart money sees it. Hunt liquidity sweeps and enter at institutional FVG zones." },
  { icon: "🛡️", title: "Risk Management & Journaling", desc: "Position sizing, drawdown limits, and the trade journal system that separates consistent traders from gamblers." },
  { icon: "🏦", title: "Prop Firm Funding", desc: "The complete guide to passing your evaluation and scaling to $50K–$150K in funded capital." },
  { icon: "🧠", title: "Trading Psychology", desc: "Why your brain works against you — and the mental frameworks that build consistency in live markets." },
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    desc: "Get started. No card needed.",
    features: ["Discord community access", "General chat & market talk", "Modules 0–3 (foundations)", "Rules & orientation"],
    cta: "Join Free",
    href: DISCORD,
    highlight: false,
    badge: null,
  },
  {
    name: "Apex",
    price: "$49",
    period: "/mo",
    desc: "Full course + daily content.",
    features: ["Everything in Free", "All 9 course modules", "Daily bias & trade ideas", "Signals & commentary", "Weekly recap & review", "Performance tracking"],
    cta: "Get Apex Access",
    href: DISCORD,
    highlight: false,
    badge: null,
  },
  {
    name: "Elite",
    price: "$149",
    period: "/mo",
    desc: "Live alerts, mentorship & voice.",
    features: ["Everything in Apex", "Live trade alerts", "Elite trade setups", "1-on-1 mentorship access", "Weekly voice sessions", "Priority support"],
    cta: "Go Elite",
    href: DISCORD,
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Course Only",
    price: "$297",
    period: " once",
    desc: "Lifetime module access.",
    features: ["All 9 course modules", "Lifetime access", "Future module updates", "Course Q&A channel"],
    cta: "Get Lifetime Access",
    href: DISCORD,
    highlight: false,
    badge: "Best Value",
  },
];

const testimonials = [
  { name: "Marcus T.", role: "Apex Member", quote: "The ORB strategy alone was worth the membership. Clear, repeatable, and it actually works on MES. Best trading community I've been part of." },
  { name: "Jordan R.", role: "Elite Member", quote: "Seeing the live alerts in real time alongside the education just clicks in a way that solo learning never did." },
  { name: "Devon K.", role: "Course Only", quote: "9 modules of actual substance. The liquidity and FVG modules changed the way I see every chart. Finally understand why price moves." },
];

export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "inherit" }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "140px 24px 100px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* subtle radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212,175,55,0.12), transparent)",
        }} />

        <div style={{ position: "relative", maxWidth: 860 }}>
          <p style={{
            display: "inline-block",
            fontSize: 12, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: G,
            marginBottom: 28,
          }}>
            MES Futures &nbsp;·&nbsp; ICT Methodology &nbsp;·&nbsp; 8AM ORB
          </p>

          <h1 style={{
            fontSize: "clamp(52px, 10vw, 96px)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            marginBottom: 28,
          }}>
            Master MES Futures.<br />
            <span style={{ color: G }}>Trade With Edge.</span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "clamp(16px, 2.5vw, 20px)",
            lineHeight: 1.65,
            maxWidth: 540,
            margin: "0 auto 48px",
          }}>
            ICT concepts, the 8AM ORB strategy, and a community of serious traders. Built for those who trade like professionals.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{
              background: G, color: "#000",
              fontWeight: 700, fontSize: 15,
              padding: "15px 32px", borderRadius: 980,
              textDecoration: "none", letterSpacing: "-0.01em",
              transition: "opacity 0.2s",
            }}>
              Join Free
            </a>
            <Link href="/pricing" style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              fontWeight: 600, fontSize: 15,
              padding: "15px 32px", borderRadius: 980,
              textDecoration: "none", letterSpacing: "-0.01em",
            }}>
              View Pricing
            </Link>
          </div>
        </div>

        {/* divider line */}
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "100%", maxWidth: 1200,
          height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }} />
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{
          maxWidth: 800, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 8, textAlign: "center",
        }}>
          {[
            ["24+", "Community Members"],
            ["9", "Course Modules"],
            ["MES", "Futures Focused"],
            ["ICT", "Methodology"],
          ].map(([v, l]) => (
            <div key={l} style={{ padding: "24px 12px" }}>
              <div style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 900, color: G, letterSpacing: "-0.03em" }}>{v}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)", margin: "0 24px" }} />

      {/* ── WHAT YOU LEARN ── */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ maxWidth: 600, marginBottom: 72 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: G, marginBottom: 16 }}>The Curriculum</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
              Everything you need.<br />Nothing you don&apos;t.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, lineHeight: 1.65 }}>
              A complete 9-module curriculum built around a single methodology. No indicators. No noise. Pure institutional price action.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 2,
          }}>
            {features.map((f, i) => (
              <div key={f.title} style={{
                padding: "36px 32px",
                background: i % 2 === 0 ? "rgba(255,255,255,0.025)" : "transparent",
                borderRadius: 2,
              }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{
        padding: "120px 24px",
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: G, marginBottom: 16 }}>Membership</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 16 }}>
              Simple pricing.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Start free. Upgrade anytime. Cancel whenever.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 16 }}>
            {tiers.map(tier => (
              <div key={tier.name} style={{
                position: "relative",
                background: tier.highlight ? "linear-gradient(135deg, #1a1200, #0d0d00)" : "rgba(255,255,255,0.03)",
                border: tier.highlight ? `1px solid ${G}` : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px 28px",
                display: "flex", flexDirection: "column",
              }}>
                {tier.badge && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: tier.highlight ? G : "rgba(255,255,255,0.15)",
                    color: tier.highlight ? "#000" : "#fff",
                    fontSize: 10, fontWeight: 800,
                    padding: "4px 14px", borderRadius: 999,
                    letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap",
                  }}>{tier.badge}</div>
                )}

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: tier.highlight ? G : "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>{tier.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                    <span style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-0.04em" }}>{tier.price}</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>{tier.period}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>{tier.desc}</p>
                </div>

                <ul style={{ flex: 1, listStyle: "none", padding: 0, marginBottom: 28 }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                      <span style={{ color: G, fontSize: 13, marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href={tier.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "block", textAlign: "center",
                  padding: "13px 20px", borderRadius: 980,
                  fontWeight: 700, fontSize: 14,
                  textDecoration: "none",
                  background: tier.highlight ? G : "transparent",
                  color: tier.highlight ? "#000" : "#fff",
                  border: tier.highlight ? "none" : "1px solid rgba(255,255,255,0.15)",
                  letterSpacing: "-0.01em",
                }}>
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: G, marginBottom: 16 }}>Members</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 900, letterSpacing: "-0.04em" }}>What traders say.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 16 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                padding: "36px 32px",
              }}>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 28, fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: G, marginTop: 4 }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "160px 24px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(212,175,55,0.08), transparent)",
        }} />
        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(44px,8vw,88px)",
            fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.02,
            marginBottom: 20,
          }}>
            Ready to trade<br />
            <span style={{ color: G }}>with real edge?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, marginBottom: 48, lineHeight: 1.6 }}>
            Join 24+ traders already inside Apex Trading Systems.<br />Start free — no credit card required.
          </p>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block",
            background: G, color: "#000",
            fontWeight: 800, fontSize: 17,
            padding: "18px 44px", borderRadius: 980,
            textDecoration: "none", letterSpacing: "-0.01em",
          }}>
            Join the Community →
          </a>
        </div>
      </section>

    </main>
  );
}
