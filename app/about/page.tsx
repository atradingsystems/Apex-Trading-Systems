const DISCORD = "https://discord.gg/a9fJRsH3us";
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
            I didn&apos;t build this because I had it all figured out. I built it because I didn&apos;t &mdash; and I couldn&apos;t find anyone who would just be straight with me about that.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>

          {/* Intro */}
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
            My name is Anthony. I&apos;ve been trading futures for years. ES and NQ mostly &mdash; the S&amp;P and Nasdaq. The markets that move the most, hurt the most, and reward the most when you finally get them right.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
            But before I got them right, I got them very wrong.
          </p>

          {/* Pull quote */}
          <div style={{ borderLeft: "3px solid rgba(212,175,55,0.5)", paddingLeft: 28, marginBottom: 48 }}>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 22, fontWeight: 700, lineHeight: 1.65, letterSpacing: "-0.02em", margin: 0 }}>
              I blew accounts. More than once. I chased entries with no structure, bought courses that taught me indicators instead of how markets actually move, and spent way too long in Discord servers full of noise and zero substance.
            </p>
          </div>

          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
            Every loss felt personal. Every blown account felt like proof that maybe this wasn&apos;t for me. But I kept going. Not because I was fearless &mdash; because I was stubborn. And eventually something shifted.
          </p>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginBottom: 48 }} />

          {/* ICT */}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 16 }}>The Turning Point</p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
            I found ICT concepts. Not through a $5,000 course &mdash; through obsession. Through screen time. Through journaling every trade until the patterns started making sense.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
            Liquidity sweeps. Fair value gaps. Order flow. The 8AM Opening Range Breakout on ES and NQ.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 20, fontWeight: 700, lineHeight: 1.7, letterSpacing: "-0.02em", marginBottom: 48 }}>
            Suddenly the market wasn&apos;t random anymore. It had logic. It had structure. And once I could see that structure &mdash; I couldn&apos;t unsee it.
          </p>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginBottom: 48 }} />

          {/* Life hit different */}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 16 }}>When Life Hit Different</p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
            I lost my job. The money I had set aside for trading went toward keeping things afloat. I found myself on a sim account &mdash; paper trading while I rebuilt financially, selling things just to stay in the game.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
            It was humbling. But it was also clarifying.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
            I had built something real with Apex Trading Systems. A Discord community. A curriculum. A methodology that actually works. And I realized that what I had built could generate income &mdash; and help other traders &mdash; without needing a live account to do it. So that became the mission.
          </p>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginBottom: 48 }} />

          {/* The mission */}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: G, marginBottom: 16 }}>Who This Is For</p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 20, fontWeight: 700, lineHeight: 1.7, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Apex Trading Systems exists for the trader I used to be.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
            The one getting destroyed by the market and wondering if there&apos;s something they&apos;re missing. The one paying for courses that teach indicators instead of concepts. The one who&apos;s smart enough to know the information they&apos;re getting isn&apos;t good enough &mdash; but doesn&apos;t know where else to go.
          </p>

          {/* What we offer */}
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 20, padding: "32px", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: G, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: 24 }}>What we offer that most communities don&apos;t</p>
            {[
              ["Start free", "No credit card. No pressure. Full community access from day one."],
              ["Teach you WHY price moves", "ICT methodology. Institutional order flow. The actual mechanics behind every major move on ES and NQ."],
              ["Show you everything", "Wins and losses. Good days and bad ones. Real growth comes from honest review &mdash; not highlight reels."],
              ["9-module curriculum", "From market structure to prop firm strategy to trading psychology. Zero to funded."],
              ["Show up every day", "Pre-market bias at 7:45AM. ORB alert at 7:58AM. Recap at 4:30PM. Day in, day out."],
            ].map(([title, desc], i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: i < 4 ? 18 : 0 }}>
                <span style={{ color: G, fontSize: 14, marginTop: 2, flexShrink: 0 }}>✓</span>
                <div>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>{title}</span>
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 15 }}> &mdash; <span dangerouslySetInnerHTML={{__html: desc}} /></span>
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
            This community is still growing. We&apos;re not the biggest. We&apos;re not backed by a guru with a Lambo and a highlight reel. We&apos;re a community of serious traders learning a serious methodology &mdash; and we&apos;re building this thing together.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.8, marginBottom: 40 }}>
            If you&apos;re tired of losing money following the wrong people &mdash; you&apos;re in the right place.
          </p>

          {/* Signature */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 32 }}>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, fontWeight: 700, marginBottom: 4 }}>— Anthony</p>
            <p style={{ color: G, fontSize: 13 }}>Founder, Apex Trading Systems</p>
          </div>

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
