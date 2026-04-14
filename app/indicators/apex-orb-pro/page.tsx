import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";

const G = "#D4AF37";

export default function ApexORBPro() {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "inherit" }}>

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: G }}>TradingView Indicator</span>
          <h1 style={{ fontSize: "clamp(38px,7vw,72px)", fontWeight: 900, letterSpacing: "-0.04em", margin: "16px 0" }}>
            Apex <span style={{ color: G }}>ORB Pro</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, lineHeight: 1.6, marginBottom: 40 }}>
            Automatically draws the 8AM Opening Range Box on ES & NQ — with midpoint line, breakout levels, and alerts. Built for 5m and 15m traders.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <CheckoutButton tier="orb_pro" label="Get Apex ORB Pro — $20" style={{ fontSize: 16, padding: "16px 36px", borderRadius: 999, background: `linear-gradient(135deg, ${G}, #F0D060, #C49A28)`, color: "#000", fontWeight: 800, border: "none", cursor: "pointer" }} />
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 14 }}>One-time payment · Pine Script sent to your email</p>
        </div>
      </section>

      {/* PREVIEW IMAGE PLACEHOLDER */}
      <section style={{ padding: "60px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", background: "#0d0d0d", border: "1px solid rgba(212,175,55,0.2)", borderRadius: 16, aspectRatio: "16/7", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📊</div>
            <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 14 }}>Chart preview — Apex ORB Pro on ES 5m</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.03em", textAlign: "center", marginBottom: 60 }}>
            What you <span style={{ color: G }}>get</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))", gap: 20 }}>
            {[
              { icon: "📦", title: "ORB Range Box", desc: "Draws the 8:00–8:15 AM opening range automatically. Box fills from ORB high to ORB low and extends to 12 PM." },
              { icon: "⚡", title: "Midpoint Line", desc: "Gold dashed line at the exact midpoint of the range — key area for reversals, rejections, and re-entries." },
              { icon: "🎯", title: "High & Low Levels", desc: "Clear green (high) and red (low) boundary lines so you always know the exact breakout levels." },
              { icon: "🔔", title: "Breakout Alerts", desc: "4 built-in alerts: ORB breakout up, ORB breakout down, midline cross up, midline cross down." },
              { icon: "📅", title: "Auto Resets Daily", desc: "Draws fresh every day at 8 AM ET. Cleans up at noon. Works automatically on historical bars too." },
              { icon: "⚙️", title: "Fully Customizable", desc: "Change box color, midline color, line width. Works on 5m and 15m charts." },
            ].map(f => (
              <div key={f.title} style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.03em", textAlign: "center", marginBottom: 48 }}>
            How it <span style={{ color: G }}>works</span>
          </h2>
          {[
            { step: "01", title: "Purchase for $20", desc: "One-time payment via Stripe. No subscription." },
            { step: "02", title: "Get the Pine Script", desc: "We email you the full Pine Script code within minutes." },
            { step: "03", title: "Add to TradingView", desc: "Open Pine Editor on TradingView, paste the code, click Add to chart." },
            { step: "04", title: "Trade the ORB", desc: "Set your alerts, wait for 8 AM, and let the box do the work." },
          ].map((s, i, arr) => (
            <div key={s.step} style={{ display: "flex", gap: 20, marginBottom: i < arr.length - 1 ? 36 : 0 }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: G, minWidth: 32, paddingTop: 3 }}>{s.step}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 8 }}>
            <span style={{ color: G }}>$20</span>
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, marginBottom: 32 }}>One-time · Instant delivery · Works on any TradingView plan</div>
          <CheckoutButton tier="orb_pro" label="Buy Apex ORB Pro →" style={{ fontSize: 16, padding: "16px 40px", borderRadius: 999, background: `linear-gradient(135deg, ${G}, #F0D060, #C49A28)`, color: "#000", fontWeight: 800, border: "none", cursor: "pointer", width: "100%" }} />
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", marginTop: 16 }}>Questions? Join our <Link href="https://discord.gg/a9fJRsH3us" style={{ color: G }}>Discord</Link></p>
        </div>
      </section>

    </main>
  );
}
