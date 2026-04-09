import Link from "next/link";

const DISCORD = "https://discord.gg/83VwHsTbs";
const G = "#D4AF37";

const features = [
  { icon: "📐", title: "ICT Concepts & Market Structure", desc: "Institutional order flow, BOS, CHoCH, and the liquidity framework that explains every major price move." },
  { icon: "⚡", title: "8AM Opening Range Breakout", desc: "Our primary daily setup on ES & NQ. One window. One strategy. Repeatable edge every session." },
  { icon: "💧", title: "Liquidity & Fair Value Gaps", desc: "See the market how smart money sees it. Hunt sweeps, enter at FVG zones, exit at the next pool." },
  { icon: "🛡️", title: "Risk Management & Journaling", desc: "Position sizing, daily limits, drawdown rules, and the journal system that builds real consistency." },
  { icon: "🏦", title: "Prop Firm Funding", desc: "Pass your eval and trade $50K–$150K in funded capital. Full breakdown of Apex Trader and Topstep." },
  { icon: "🧠", title: "Trading Psychology", desc: "Why your brain works against you in live markets — and the frameworks that override it." },
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
    features: ["Everything in Apex", "Live trade alerts", "Elite trade setups", "1-on-1 mentorship", "Weekly voice sessions", "Priority support"],
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
    features: ["All 9 course modules", "Lifetime access", "Future updates included", "Course Q&A channel"],
    cta: "Get Lifetime Access",
    href: DISCORD,
    highlight: false,
    badge: null,
  },
];

const testimonials = [
  { name: "Marcus T.", role: "Apex Member", quote: "The ORB strategy alone was worth the membership. Clear, repeatable, and it actually works on ES. Best trading community I've been part of." },
  { name: "Jordan R.", role: "Elite Member", quote: "Seeing the live alerts in real time alongside the education just clicks in a way that solo learning never did." },
  { name: "Devon K.", role: "Course Only", quote: "9 modules of actual substance. The liquidity and FVG modules changed the way I see every chart. Finally understand why price moves." },
];

export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "inherit", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        padding: "140px 24px 100px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background orbs */}
        <div className="orb" style={{ width: 600, height: 600, background: "rgba(212,175,55,0.07)", top: -100, left: "50%", transform: "translateX(-50%)" }} />
        <div className="orb" style={{ width: 400, height: 400, background: "rgba(212,175,55,0.04)", bottom: 0, right: -100 }} />
        <div className="orb" style={{ width: 300, height: 300, background: "rgba(100,100,255,0.03)", bottom: 100, left: -50 }} />

        <div style={{ position: "relative", maxWidth: 860, zIndex: 1 }}>
          {/* Pill tag */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(212,175,55,0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: 999,
            padding: "7px 18px",
            marginBottom: 36,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: G, display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: G, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              ES & NQ · ICT · 8AM ORB
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(52px, 10vw, 96px)",
            fontWeight: 900, lineHeight: 1.02,
            letterSpacing: "-0.04em",
            marginBottom: 24,
          }}>
            Master ES & NQ.<br />
            <span style={{ color: G }}>Trade With Edge.</span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "clamp(16px, 2.5vw, 19px)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 48px",
          }}>
            ICT concepts, the 8AM ORB strategy, and a community of serious traders — built for those who want to trade like professionals.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer"
              className="btn-gold"
              style={{
                color: "#000", fontWeight: 800, fontSize: 15,
                padding: "15px 32px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}>
              Join Free →
            </a>
            <Link href="/pricing"
              className="btn-glass"
              style={{
                color: "#fff", fontWeight: 600, fontSize: 15,
                padding: "15px 32px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "40px 24px 60px" }}>
        <div style={{
          maxWidth: 700, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 4,
        }}>
          {[
            ["24+", "Members"],
            ["9", "Modules"],
            ["ES & NQ", "Focused"],
            ["ICT", "Methodology"],
          ].map(([v, l]) => (
            <div key={l} className="glass" style={{
              padding: "24px 12px",
              textAlign: "center",
              borderRadius: 16,
            }}>
              <div style={{ fontSize: "clamp(22px,4vw,32px)", fontWeight: 900, color: G, letterSpacing: "-0.03em" }}>{v}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT YOU LEARN ── */}
      <section style={{ padding: "100px 24px", position: "relative" }}>
        <div className="orb" style={{ width: 500, height: 500, background: "rgba(212,175,55,0.04)", top: 0, right: -100 }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 560, marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: G, marginBottom: 14 }}>The Curriculum</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 18 }}>
              Everything you need.<br />Nothing you don&apos;t.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, lineHeight: 1.65 }}>
              9 modules. One methodology. Built to take you from zero to funded.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))", gap: 12 }}>
            {features.map((f) => (
              <div key={f.title} className="glass" style={{ padding: "32px 28px" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "100px 24px", position: "relative" }}>
        <div className="orb" style={{ width: 600, height: 600, background: "rgba(212,175,55,0.05)", bottom: 0, left: "50%", transform: "translateX(-50%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: G, marginBottom: 14 }}>Membership</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 14 }}>Simple pricing.</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Start free. Upgrade anytime. Cancel whenever.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 12 }}>
            {tiers.map(tier => (
              <div key={tier.name}
                className={tier.highlight ? "glass-gold glow-gold" : "glass"}
                style={{ position: "relative", padding: "32px 28px", display: "flex", flexDirection: "column" }}>
                {tier.badge && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: G, color: "#000",
                    fontSize: 10, fontWeight: 800,
                    padding: "4px 14px", borderRadius: 999,
                    letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap",
                  }}>{tier.badge}</div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: tier.highlight ? G : "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>{tier.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                    <span style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-0.04em" }}>{tier.price}</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.3)" }}>{tier.period}</span>
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
                <a href={tier.href} target="_blank" rel="noopener noreferrer"
                  className={tier.highlight ? "btn-gold" : "btn-glass"}
                  style={{
                    display: "block", textAlign: "center",
                    padding: "13px 20px",
                    fontWeight: 700, fontSize: 14,
                    textDecoration: "none",
                    color: tier.highlight ? "#000" : "#fff",
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
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: G, marginBottom: 14 }}>Members</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.04em" }}>What traders say.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 12 }}>
            {testimonials.map(t => (
              <div key={t.name} className="glass" style={{ padding: "36px 32px" }}>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 28, fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: G, marginTop: 4 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "140px 24px",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div className="orb" style={{ width: 700, height: 700, background: "rgba(212,175,55,0.06)", bottom: -200, left: "50%", transform: "translateX(-50%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(44px,8vw,88px)",
            fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.02,
            marginBottom: 20,
          }}>
            Ready to trade<br />
            <span style={{ color: G }}>with real edge?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, marginBottom: 48, lineHeight: 1.65 }}>
            Join 24+ traders already inside Apex Trading Systems.<br />Start free — no credit card required.
          </p>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer"
            className="btn-gold"
            style={{
              display: "inline-block", color: "#000",
              fontWeight: 800, fontSize: 17,
              padding: "18px 44px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}>
            Join the Community →
          </a>
        </div>
      </section>

    </main>
  );
}
