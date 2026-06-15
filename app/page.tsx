import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import EmailCapture from "@/components/EmailCapture";
import CountUp from "@/components/CountUp";
import FadeIn from "@/components/FadeIn";

const DISCORD = "https://discord.gg/a9fJRsH3us";
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
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 999,
  color: "#fff",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-block",
};

const features = [
  { icon: "📐", title: "ICT Concepts & Market Structure", desc: "Institutional order flow, BOS, CHoCH, and the liquidity framework that explains every major price move." },
  { icon: "⚡", title: "8AM Opening Range Breakout", desc: "Our primary daily setup on ES & NQ. One window. One strategy. Repeatable edge every session." },
  { icon: "💧", title: "Liquidity & Fair Value Gaps", desc: "See the market how smart money sees it. Hunt sweeps, enter at FVG zones, exit at the next pool." },
  { icon: "📊", title: "Options Trading", desc: "Calls, puts, and spreads on indices and stocks. Structured setups with defined risk — a powerful, flexible tool alongside your futures game." },
  { icon: "🛡️", title: "Risk Management & Journaling", desc: "Position sizing, daily limits, and the journal system that builds real consistency." },
  { icon: "🏦", title: "Prop Firm Funding", desc: "Pass your eval and trade $50K–$150K in funded capital. Full breakdown of Apex Trader and Topstep." },
  { icon: "🧠", title: "Trading Psychology", desc: "Why your brain works against you in live markets — and the frameworks that override it." },
];

const tiers = [
  { name: "Free", price: "$0", period: "", desc: "Get started. No card needed.", features: ["Discord community access", "General chat & market talk", "Modules 0–3 (foundations)", "Rules & orientation", "🏈 Free sports betting picks"], stripeKey: "free", highlight: false },
  { name: "Apex", price: "$25", oldPrice: "$49", period: "/mo", desc: "Full course + daily content.", badge: "50% OFF", features: ["Everything in Free", "All 9 course modules", "Daily bias & trade ideas", "Weekly recap & review"], stripeKey: "apex", highlight: false },
  { name: "Elite", price: "$150", oldPrice: "$300", period: "/mo", desc: "Live alerts & mentorship.", badge: "50% OFF", features: ["Everything in Apex", "Live trade alerts", "Elite trade setups", "1-on-1 mentorship", "Weekly voice sessions", "Priority support"], stripeKey: "elite", highlight: true },
  { name: "Course Only", price: "$297", period: " once", desc: "Lifetime module access.", features: ["All 9 course modules", "Lifetime access", "Future updates included", "Course Q&A channel"], stripeKey: "course", highlight: false },
];

const testimonials = [
  { name: "Marcus T.", role: "Apex Member", quote: "The ORB strategy alone was worth the membership. Clear, repeatable, and it actually works on ES. Best trading community I've been part of." },
  { name: "Jordan R.", role: "Elite Member", quote: "Seeing the live alerts in real time alongside the education just clicks in a way that solo learning never did." },
  { name: "Martin F.", role: "Course Only", quote: "9 modules of actual substance. The liquidity and FVG modules changed the way I see every chart." },
];

const painPoints = [
  "Blown accounts from chasing entries with no structure",
  "Expensive courses that teach indicators — not how markets actually move",
  "Discord servers full of noise with no real education",
  "No accountability, no community, no one to learn with",
  "Information overload with no clear system to follow",
];

const comparisons = [
  { them: "Sell expensive courses upfront", us: "Start free — full community access at $0" },
  { them: "Teach indicators and alerts, not concepts", us: "ICT methodology — understand WHY price moves" },
  { them: "Disappear after you purchase", us: "Daily market briefs, live alerts, weekly voice sessions" },
  { them: "Fake screenshots and unrealistic promises", us: "Transparent about wins and losses — real trader, real results" },
  { them: "No structure, no curriculum", us: "9-module curriculum from setup to funded account" },
];

export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "inherit", overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "140px 24px 100px",
        position: "relative", overflow: "hidden",
        background: "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)",
      }}>
        {/* Live badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,200,83,0.1)", border: "1px solid rgba(0,200,83,0.25)", borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00c853", display: "inline-block", boxShadow: "0 0 8px #00c853" }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "#00c853", letterSpacing: "0.08em" }}>24+ MEMBERS TRADING RIGHT NOW</span>
        </div>

        <h1 style={{ fontSize: "clamp(52px, 10vw, 96px)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: 24 }}>
          Master Futures & Options.<br /><span style={{ color: G }}>Trade With Edge.</span>
        </h1>

        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(16px,2.5vw,19px)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 48px" }}>
          ICT concepts, the 8AM ORB strategy, options trading, and a community of serious traders built for those who want to trade like professionals.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const }}>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{ ...btnGold, fontSize: 15, padding: "15px 32px" }}>Join Free →</a>
          <Link href="/pricing" style={{ ...btnGlass, fontSize: 15, padding: "15px 32px" }}>View Pricing</Link>
        </div>

        <p style={{ marginTop: 20, color: "rgba(255,255,255,0.25)", fontSize: 13 }}>No credit card required · Free community access · Cancel anytime</p>
      </section>

      {/* STATS */}
      <section style={{ padding: "40px 24px 80px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
          <FadeIn delay={0}>
            <div style={{ ...glass, padding: "20px 10px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(20px,4vw,28px)", fontWeight: 900, color: G, letterSpacing: "-0.03em" }}><CountUp end={24} suffix="+" /></div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 6, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Members</div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div style={{ ...glass, padding: "20px 10px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(20px,4vw,28px)", fontWeight: 900, color: G, letterSpacing: "-0.03em" }}><CountUp end={9} /></div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 6, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Modules</div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div style={{ ...glass, padding: "20px 10px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(14px,3vw,20px)", fontWeight: 900, color: G, letterSpacing: "-0.03em" }}>Futures + Options</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 6, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Markets</div>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div style={{ ...glass, padding: "20px 10px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(20px,4vw,28px)", fontWeight: 900, color: G, letterSpacing: "-0.03em" }}>ICT</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 6, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Method</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,0,0,0.02)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "rgba(255,100,100,0.8)", marginBottom: 16 }}>Sound Familiar?</p>
          <h2 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 48 }}>
            Tired of losing money<br />following the wrong people?
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
            {painPoints.map((p, i) => (
              <FadeIn key={i} delay={i * 80} direction="left">
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, textAlign: "left" as const, background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "16px 20px" }}>
                  <span style={{ color: "rgba(255,80,80,0.8)", fontSize: 16, marginTop: 1, flexShrink: 0 }}>✕</span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 15 }}>{p}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <p style={{ marginTop: 40, color: "rgba(255,255,255,0.4)", fontSize: 17, lineHeight: 1.65 }}>
            Every trader on this list was us before we found a system that actually works.<br />
            <strong style={{ color: "#fff" }}>Apex Trading Systems was built to fix all of this.</strong>
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 14 }}>The Difference</p>
            <h2 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, letterSpacing: "-0.04em" }}>Why traders choose Apex.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ ...glass, padding: "24px 28px" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,80,80,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 20 }}>Other Communities</div>
              {comparisons.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
                  <span style={{ color: "rgba(255,80,80,0.6)", flexShrink: 0, marginTop: 2 }}>✕</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{c.them}</span>
                </div>
              ))}
            </div>
            <div style={{ ...glassGold, padding: "24px 28px" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: G, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 20 }}>Apex Trading Systems</div>
              {comparisons.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
                  <span style={{ color: G, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>{c.us}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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

      {/* SPORTS PICKS */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,180,100,0.02)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#00c853", marginBottom: 14 }}>Community Bonus</p>
            <h2 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 16 }}>
              Free Sports Picks.<br /><span style={{ color: G }}>For Every Member.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1.65, maxWidth: 560, margin: "0 auto" }}>
              Because trading is a grind — and we like to keep it fun. Every Apex member gets access to our free sports betting picks channel in Discord. NFL, NBA, MLB, and more. No upsells, no premium tier — just picks, posted free.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 10, marginBottom: 40 }}>
            {[
              { icon: "🏈", sport: "NFL", desc: "Weekly game picks & best bets" },
              { icon: "🏀", sport: "NBA", desc: "Nightly picks during the season" },
              { icon: "⚾", sport: "MLB", desc: "Daily run line & totals" },
              { icon: "🏒", sport: "NHL", desc: "Puck line picks & playoffs" },
            ].map(s => (
              <div key={s.sport} style={{ background: "#0d0d0d", border: "1px solid rgba(0,200,83,0.15)", borderRadius: 16, padding: "24px", textAlign: "center" as const }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{s.sport}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(0,200,83,0.08)", border: "1px solid rgba(0,200,83,0.2)", borderRadius: 12, padding: "14px 28px", marginBottom: 20 }}>
              <span style={{ color: "#00c853", fontSize: 18 }}>✓</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 15 }}>Included free with every membership tier — even the free one.</span>
            </div>
            <br />
            <a href="https://discord.gg/a9fJRsH3us" target="_blank" rel="noopener noreferrer" style={{ ...btnGold, fontSize: 14, padding: "13px 28px" }}>Get Access Free →</a>
          </div>
        </div>
      </section>

      {/* FREE LEAD MAGNET */}
      <section style={{ padding: "80px 24px", background: "rgba(212,175,55,0.03)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 14 }}>Free Download</p>
          <h2 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 16 }}>
            Get the Free<br /><span style={{ color: G }}>8AM ORB Strategy Guide</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1.65, marginBottom: 36 }}>
            The exact setup we trade every morning on ES & NQ. Entry criteria, stop placement, targets, and how to filter real setups from fakeouts.
          </p>
          <EmailCapture />
          <p style={{ marginTop: 14, color: "rgba(255,255,255,0.2)", fontSize: 12 }}>No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 14 }}>Membership</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 12 }}>Simple pricing.</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16 }}>Start free. Upgrade anytime. Cancel whenever.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 12 }}>
            {tiers.map(tier => (
              <div key={tier.name} style={{ ...(tier.highlight ? glassGold : glass), position: "relative", padding: "28px", display: "flex", flexDirection: "column" as const }}>
                {tier.highlight && (
                  <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: G, color: "#000", fontSize: 10, fontWeight: 800, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.1em", textTransform: "uppercase" as const, whiteSpace: "nowrap" as const }}>Most Popular</div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: tier.highlight ? G : "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>{tier.name}</div>
                    {(tier as any).badge && <span style={{ background: "#ff3b30", color: "#fff", fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 999 }}>{(tier as any).badge}</span>}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                    <span style={{ fontSize: 44, fontWeight: 900, letterSpacing: "-0.04em" }}>{tier.price}</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>{tier.period}</span>
                  </div>
                  {(tier as any).oldPrice && <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}><span style={{ textDecoration: "line-through" }}>{(tier as any).oldPrice}/mo</span></div>}
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
                <CheckoutButton tier={tier.stripeKey} label={tier.stripeKey === "free" ? "Join Free" : tier.name === "Apex" ? "Get Apex Access" : tier.name === "Elite" ? "Go Elite" : "Get Lifetime Access"}
                  style={{ ...(tier.highlight ? btnGold : btnGlass), display: "block", textAlign: "center" as const, padding: "13px 20px", fontSize: 13, color: tier.highlight ? "#000" : "#fff", letterSpacing: "-0.01em" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELITE TRADE SETUPS */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.07)", background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(212,175,55,0.05) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 14 }}>Real Trades. Real Results.</p>
            <h2 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 16 }}>
              Inside <span style={{ color: G }}>#elite-trade-setups</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1.65, maxWidth: 560, margin: "0 auto" }}>
              Elite members get live trade alerts posted directly in Discord — entries, targets, stops, and real-time options plays. Here&apos;s what it looks like.
            </p>
          </div>

          {/* $4,150 featured result */}
          <FadeIn delay={0}>
            <div style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.03))", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 20, padding: "28px 32px", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 20 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: G, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 8 }}>Featured Result — ES Long Alert · April 20, 2026</div>
                <div style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, color: "#00c853", letterSpacing: "-0.04em", lineHeight: 1 }}>+$4,150</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginTop: 8 }}>Entry 7,130.25 · Target 7,184.25 · R/R 1:2.8R · Closed early by member</div>
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontStyle: "italic", maxWidth: 280, borderLeft: "2px solid rgba(212,175,55,0.3)", paddingLeft: 20 }}>
                &ldquo;Just closed the trade early for a gain of $4,150&rdquo;
                <div style={{ marginTop: 8, color: G, fontStyle: "normal", fontWeight: 700, fontSize: 12 }}>— Ant-Trading, Elite Member</div>
              </div>
            </div>
          </FadeIn>

          {/* Screenshot grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 12, marginBottom: 32 }}>
            {[
              { src: "/elite-setup-options.jpg", badge: "+93.97%", badgeColor: "#00c853", badgeBg: "rgba(0,200,83,0.15)", label: "AAPL Options", desc: "AAPL 292.5C weekly — live alert posted in Discord. P/L Open: +$1,275" },
              { src: "/elite-setup-futures.jpg", badge: "Live Alert", badgeColor: G, badgeBg: "rgba(212,175,55,0.15)", label: "ES/MES Futures", desc: "ES Long — Entry 7,265.75 · Target 7,300.50. Posted in real time." },
              { src: "/elite-setup-chart.jpg", badge: "Chart Analysis", badgeColor: G, badgeBg: "rgba(212,175,55,0.15)", label: "ES Futures Setup", desc: "15m chart with key levels and trade zones shared in #elite-trade-setups." },
              { src: "/elite-setup-alert.jpg", badge: "+$4,150", badgeColor: "#00c853", badgeBg: "rgba(0,200,83,0.15)", label: "Bot Alert + Result", desc: "Apex Bot posts the alert. Member closes for $4,150 gain. This is the loop." },
              { src: "/elite-setup-tp.jpg", badge: "TP Smashed", badgeColor: "#00c853", badgeBg: "rgba(0,200,83,0.15)", label: "ES Long · 4/15/26", desc: "Entry 7,008.25 · Target 7,018.75 · R/R 1:1.8R. \"Another TP smashed 💪\"" },
              { src: "/elite-setup-mes-short.jpg", badge: "TP1 + TP2 💪", badgeColor: "#00c853", badgeBg: "rgba(0,200,83,0.15)", label: "MES Short · 4/7/26", desc: "MESM26 Short · Entry 6,616.75 · TP1 6,589.75 · TP2 6,576.75 · R:R 1.74. Both targets smashed." },
              { src: "/elite-setup-mes-short2.jpg", badge: "TP1 + TP2 Hit", badgeColor: "#00c853", badgeBg: "rgba(0,200,83,0.15)", label: "MES Short · 4/6/26", desc: "MESM26 Short · Entry 6,642.00 · TP1 6,629.00 · TP2 6,624.00 · R:R 3. Chart confirms clean breakdown." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{ background: "#0d0d0d", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 16, overflow: "hidden" }}>
                  <img src={item.src} alt={item.label} style={{ width: "100%", display: "block" }} />
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ background: item.badgeBg, color: item.badgeColor, fontSize: 11, fontWeight: 800, padding: "2px 9px", borderRadius: 999 }}>{item.badge}</span>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{item.label}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, marginBottom: 24 }}>Real screenshots from our Discord. No Photoshop. No cherry-picking.</p>
            <a href="https://discord.gg/a9fJRsH3us" target="_blank" rel="noopener noreferrer" style={{ ...btnGold, fontSize: 14, padding: "13px 28px" }}>Get Elite Access →</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 14 }}>Members</p>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.04em" }}>What traders say.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 10 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ ...glass, padding: "32px" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: G, fontSize: 14 }}>★</span>)}
                </div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 24, fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: G, marginTop: 4 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "120px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.07)", background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(212,175,55,0.06), transparent)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(44px,8vw,88px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.02, marginBottom: 20 }}>
            Ready to trade<br /><span style={{ color: G }}>with real edge?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, marginBottom: 48, lineHeight: 1.65 }}>
            Join 24+ traders already inside Apex Trading Systems.<br />Start free — no credit card required.
          </p>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{ ...btnGold, fontSize: 17, padding: "18px 44px" }}>
            Join the Community →
          </a>
          <p style={{ marginTop: 16, color: "rgba(255,255,255,0.2)", fontSize: 13 }}>Free forever · No credit card · Cancel paid tiers anytime</p>
        </div>
      </section>

    </main>
  );
}
