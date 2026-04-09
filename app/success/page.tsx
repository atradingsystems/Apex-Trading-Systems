const DISCORD = "https://discord.gg/83VwHsTbs";
const G = "#D4AF37";

const glass: React.CSSProperties = {
  background: "#0a0a0a",
  
  
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 20,
  position: "relative" as const,
  overflow: "hidden" as const,
};

const stories = [
  {
    name: "Marcus T.",
    role: "Elite Member",
    handle: "@marcust_trades",
    result: "+$2,400",
    period: "First month funded",
    instrument: "ES",
    quote: "I'd been trading for 2 years with no consistency. The ORB setup changed everything. Simple, repeatable, and it actually works. Hit my first funded account payout in month one.",
    tags: ["8AM ORB", "Prop Funded", "ES Futures"],
  },
  {
    name: "Jordan R.",
    role: "Elite Member",
    handle: "@jordanr_fx",
    result: "Passed Apex Eval",
    period: "$50K funded in 18 days",
    instrument: "NQ",
    quote: "I failed 4 evals before joining. The risk management module alone was worth the price. Clear daily limits, proper sizing — I passed in 18 trading days without breaking a single rule.",
    tags: ["Prop Firm", "Risk Management", "NQ Futures"],
  },
  {
    name: "Devon K.",
    role: "Course Only",
    handle: "@devonk_trader",
    result: "3 months consistent",
    period: "First profitable quarter",
    instrument: "ES",
    quote: "The liquidity and FVG modules changed the way I see every chart. I stopped revenge trading once I understood why price moves. First profitable quarter after 18 months of losses.",
    tags: ["ICT Concepts", "FVG", "Consistency"],
  },
  {
    name: "Aaliyah M.",
    role: "Apex Member",
    handle: "@aaliyah_futures",
    result: "+68% win rate",
    period: "Over 60 live trades",
    instrument: "ES",
    quote: "I was skeptical about ICT concepts at first. The way the course breaks down liquidity sweeps made it click for me. 68% win rate over 60 trades tracking every single one in my journal.",
    tags: ["ICT Liquidity", "Trade Journal", "ES Futures"],
  },
  {
    name: "Chris B.",
    role: "Elite Member",
    handle: "@chrisbtrading",
    result: "2x accounts funded",
    period: "Running 2 funded accounts",
    instrument: "NQ & ES",
    quote: "After passing my first eval I applied for a second immediately. Now running two $50K accounts simultaneously. The scaling plan in module 9 is exactly how I approached it.",
    tags: ["Scaling", "Multiple Accounts", "Prop Firm"],
  },
  {
    name: "Priya S.",
    role: "Apex Member",
    handle: "@priya_scalps",
    result: "From $0 to funded",
    period: "No prior trading experience",
    instrument: "ES",
    quote: "I came in with zero experience. Module 0 through to Module 9 gave me a complete education. I'm now paper trading with an 70%+ win rate and preparing for my first live eval.",
    tags: ["Beginner", "Full Curriculum", "ES Futures"],
  },
];

export default function Success() {
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
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.07), transparent)",
        }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 16 }}>Proof</p>
          <h1 style={{ fontSize: "clamp(44px,8vw,80px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.02, marginBottom: 20 }}>
            Real traders.<br /><span style={{ color: G }}>Real results.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
            These are the stories from inside Apex Trading Systems. No fabricated screenshots. No fake wins. Just traders who did the work.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "48px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, textAlign: "center" }}>
          {[["24+","Active Members"],["9","Course Modules"],["Multiple","Funded Accounts"],["ES & NQ","Instruments"]].map(([v,l]) => (
            <div key={l} style={{ padding: "20px 8px" }}>
              <div style={{ fontSize: "clamp(20px,4vw,28px)", fontWeight: 900, color: G, letterSpacing: "-0.03em" }}>{v}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 6, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORIES */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px,1fr))", gap: 14 }}>
            {stories.map(s => (
              <div key={s.name} style={{ ...glass, padding: "32px" }}>
                {/* Gold top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)" }} />

                {/* Result badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  borderRadius: 999, padding: "4px 12px",
                  marginBottom: 20,
                }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: G }}>{s.result}</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>· {s.period}</span>
                </div>

                {/* Quote */}
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: 24, fontStyle: "italic" }}>
                  &ldquo;{s.quote}&rdquo;
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginBottom: 24 }}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 999, padding: "3px 10px",
                      fontSize: 11, color: "rgba(255,255,255,0.45)",
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: `linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.1))`,
                    border: "1px solid rgba(212,175,55,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, fontWeight: 900, color: G,
                    flexShrink: 0,
                  }}>
                    {s.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: G, marginTop: 2 }}>{s.role}</div>
                  </div>
                  <div style={{ marginLeft: "auto", fontSize: 11, color: "rgba(255,255,255,0.25)" }}>{s.instrument}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ padding: "0 24px 48px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, lineHeight: 1.75 }}>
            Results shown are from actual community members. Individual results vary. Trading involves substantial risk of loss. Past performance does not guarantee future results. These results are not typical and should not be expected.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "100px 24px", textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(212,175,55,0.06), transparent)",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 16 }}>
            Your story starts here.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, marginBottom: 36 }}>
            Join the community for free and start building your edge today.
          </p>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{
            background: "linear-gradient(135deg, #D4AF37, #F0D060, #C49A28)",
            borderRadius: 999, color: "#000",
            fontWeight: 800, fontSize: 16,
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
