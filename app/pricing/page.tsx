import CheckoutButton from "@/components/CheckoutButton";
import Link from "next/link";

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
  color: "#000",
  fontWeight: 800,
  textDecoration: "none",
  display: "block",
  textAlign: "center",
  border: "none",
  cursor: "pointer",
};

const btnGlass: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  
  
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 999,
  color: "#fff",
  fontWeight: 600,
  textDecoration: "none",
  display: "block",
  textAlign: "center",
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    desc: "Get started. No card needed.",
    features: ["Discord community", "General chat & market talk", "Modules 0–3", "Rules & orientation"],
    notIncluded: ["Full 9-module course", "Daily bias & trade ideas", "Live trade alerts", "Elite setups & mentorship"],
    cta: "Join Free",
    highlight: false,
    stripeKey: "free",
  },
  {
    name: "Apex Member",
    price: "$25",
    period: "/mo",
    desc: "Full course + daily content.",
    badge: "50% OFF",
    features: ["Everything in Free", "All 9 course modules", "Daily bias & trade ideas", "Weekly recap & review"],
    notIncluded: ["Signals & commentary", "Live trade alerts", "Elite trade setups", "1-on-1 mentorship", "Weekly voice sessions"],
    cta: "Get Apex Access",
    highlight: false,
    stripeKey: "apex",
  },
  {
    name: "Elite",
    price: "$150",
    period: "/mo",
    desc: "Live alerts, mentorship & voice.",
    badge: "50% OFF",
    features: ["Everything in Apex", "Live trade alerts", "Elite trade setups", "1-on-1 mentorship access", "Weekly voice sessions", "Priority support"],
    notIncluded: [],
    cta: "Go Elite",
    highlight: true,
    stripeKey: "elite",
  },
  {
    name: "Course Only",
    price: "$297",
    period: " once",
    desc: "Lifetime module access.",
    features: ["All 9 course modules", "Lifetime access", "Future updates included", "Course Q&A channel"],
    notIncluded: ["Community channels", "Live alerts", "Mentorship"],
    cta: "Get Lifetime Access",
    highlight: false,
    stripeKey: "course",
  },
];

const faqs = [
  { q: "Do I need trading experience to join?", a: "No. The curriculum starts from absolute basics in Module 0. If you know what a candlestick is, you're ready." },
  { q: "What platform do I need to trade ES & NQ?", a: "We recommend NinjaTrader or Tradovate. Both are free to start. Module 0 covers the full setup." },
  { q: "What's the difference between Apex Member and Course Only?", a: "Apex Member includes the full course plus ongoing daily signals, content, and community. Course Only is lifetime module access without the recurring community." },
  { q: "Can I cancel my subscription?", a: "Yes — cancel anytime. No contracts, no questions asked. Access continues until the end of your billing period." },
  { q: "Are the live trade alerts real-time?", a: "Yes. Elite members receive live alerts directly in the Discord #elite-trade-setups channel with full entry, stop, and target details." },
];

export default function Pricing() {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "inherit", overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: G, marginBottom: 16 }}>Membership</p>
          <h1 style={{ fontSize: "clamp(40px,8vw,72px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 16 }}>
            Simple, <span style={{ color: G }}>honest</span> pricing.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Start free. Upgrade when you&apos;re ready. Cancel anytime.</p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section style={{ padding: "80px 24px", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 12 }}>
            {tiers.map(tier => (
              <div key={tier.name} style={{
                ...(tier.highlight ? glassGold : glass),
                position: "relative",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
              }}>
                {tier.highlight && (
                  <div style={{
                    position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
                    background: G, color: "#000",
                    fontSize: 10, fontWeight: 800,
                    padding: "4px 16px", borderRadius: 999,
                    letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap",
                  }}>Most Popular</div>
                )}

                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: tier.highlight ? G : "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{tier.name}</div>
                    {(tier as any).badge && (
                      <span style={{ background: "#ff3b30", color: "#fff", fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 999, letterSpacing: "0.08em" }}>{(tier as any).badge}</span>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                    <span style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-0.04em" }}>{tier.price}</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.3)" }}>{tier.period}</span>
                  </div>
                  {(tier as any).badge && (
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>
                      <span style={{ textDecoration: "line-through" }}>{tier.name === "Elite" ? "$300/mo" : "$49/mo"}</span>
                    </div>
                  )}
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>{tier.desc}</p>
                </div>

                <ul style={{ flex: 1, listStyle: "none", padding: 0, marginBottom: 28 }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 11 }}>
                      <span style={{ color: G, fontSize: 12, marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map(f => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 11 }}>
                      <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, marginTop: 2, flexShrink: 0 }}>✕</span>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <CheckoutButton
                  tier={tier.stripeKey}
                  label={tier.cta}
                  style={{
                    ...(tier.highlight ? btnGold : btnGlass),
                    padding: "13px 20px",
                    fontSize: 13,
                    letterSpacing: "-0.01em",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: G, marginBottom: 14, textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, letterSpacing: "-0.04em", textAlign: "center", marginBottom: 56 }}>Common questions.</h2>
          <div>
            {faqs.map((faq, i) => (
              <div key={faq.q} style={{
                borderBottom: i < faqs.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                padding: "28px 0",
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 12, letterSpacing: "-0.02em" }}>{faq.q}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: 15 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 16 }}>
            Start free today.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, marginBottom: 36 }}>No credit card. No commitment. Just join.</p>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" style={{
            ...btnGold,
            display: "inline-block",
            fontSize: 16,
            padding: "16px 40px",
          }}>
            Join the Community →
          </a>
        </div>
      </section>

    </main>
  );
}
