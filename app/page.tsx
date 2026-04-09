import Link from "next/link";

const DISCORD = "https://discord.gg/83VwHsTbs";

const features = [
  { icon: "📐", title: "ICT Concepts & Market Structure", desc: "Learn how institutional order flow drives price. Master liquidity, BOS, and CHoCH." },
  { icon: "⚡", title: "8AM Opening Range Breakout", desc: "Our primary daily setup. One window. One strategy. Repeatable edge every session." },
  { icon: "💧", title: "Liquidity & Fair Value Gaps", desc: "See the market the way smart money sees it. Hunt sweeps, trade FVGs with precision." },
  { icon: "🛡️", title: "Risk Management & Journaling", desc: "Position sizing, drawdown limits, and the journaling system that builds consistency." },
  { icon: "🏦", title: "Prop Firm Funding & Scaling", desc: "Pass your eval and trade institutional capital. We cover Apex Trader, Topstep, and more." },
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    desc: "Start here. No credit card required.",
    features: [
      "Discord community access",
      "General chat & market talk",
      "Modules 0–3 (foundations)",
      "Rules & guidelines",
    ],
    cta: "Join Free",
    href: DISCORD,
    highlight: false,
  },
  {
    name: "Apex Member",
    price: "$49",
    period: "/mo",
    desc: "Full course + daily signals and recaps.",
    features: [
      "Everything in Free",
      "All 9 course modules",
      "Daily bias & trade ideas",
      "Signals & commentary",
      "Weekly recap & review",
      "Performance tracking",
    ],
    cta: "Get Apex Access",
    href: DISCORD,
    highlight: false,
  },
  {
    name: "Elite",
    price: "$149",
    period: "/mo",
    desc: "Live alerts, mentorship, and voice sessions.",
    features: [
      "Everything in Apex",
      "Live trade alerts",
      "Elite trade setups",
      "1-on-1 mentorship access",
      "Weekly voice sessions",
      "Elite lounge access",
      "Priority support",
    ],
    cta: "Go Elite",
    href: DISCORD,
    highlight: true,
  },
  {
    name: "Course Only",
    price: "$297",
    period: " one-time",
    desc: "Lifetime access to all 9 modules.",
    features: [
      "All 9 course modules",
      "Lifetime access",
      "Future module updates",
      "Course Q&A channel",
    ],
    cta: "Get Lifetime Access",
    href: DISCORD,
    highlight: false,
  },
];

const testimonials = [
  { name: "Marcus T.", role: "Apex Member", text: "The ORB strategy alone was worth the membership. Clear, repeatable, and it actually works on MES. Best trading community I've been part of." },
  { name: "Jordan R.", role: "Elite Member", text: "The live alerts changed how I trade. Seeing the setups in real time alongside the education clicks in a way that solo learning never did." },
  { name: "Devon K.", role: "Course Only", text: "9 modules of actual content — not fluff. The liquidity and FVG modules opened my eyes. Finally understand why price moves the way it does." },
];

const stats = [
  { value: "24+", label: "Members" },
  { value: "9", label: "Course Modules" },
  { value: "MES", label: "Futures Focused" },
  { value: "ICT", label: "Methodology" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-black to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block border border-gold/40 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            MES Futures · ICT · 8AM ORB
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Master MES Futures.<br />
            <span className="gold-gradient">Trade With Edge.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            ICT concepts, 8AM ORB strategy, and a community of serious traders. Built for those who want to trade like professionals — not gamble like retail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={DISCORD} target="_blank" rel="noopener noreferrer"
              className="bg-gold text-black font-bold px-8 py-4 rounded text-base hover:bg-gold-light transition">
              Join Free →
            </a>
            <Link href="/pricing"
              className="border border-white/20 text-white font-semibold px-8 py-4 rounded text-base hover:border-gold hover:text-gold transition">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-white/10 py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-black gold-gradient">{s.value}</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE TEACH */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">What You&apos;ll Learn</h2>
            <p className="text-gray-400 max-w-xl mx-auto">A complete system — from TradingView setup to passing a prop firm eval. No fluff. No indicators. Pure price action.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
            {/* 9 Modules card */}
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 card-hover">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-gold font-bold text-lg mb-2">9-Module Curriculum</h3>
              <p className="text-gray-400 text-sm leading-relaxed">From TradingView setup to funded accounts. A structured path that builds real, lasting edge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Simple Pricing</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Start free. Upgrade when you&apos;re ready. No contracts, cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name}
                className={`relative rounded-xl p-6 flex flex-col card-hover ${
                  tier.highlight
                    ? "bg-gold/10 border-2 border-gold"
                    : "bg-white/5 border border-white/10"
                }`}>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className={`font-bold text-lg mb-1 ${tier.highlight ? "text-gold" : "text-white"}`}>{tier.name}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-gray-400 text-sm mb-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{tier.desc}</p>
                </div>
                <ul className="flex-1 space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-gold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={tier.href} target="_blank" rel="noopener noreferrer"
                  className={`text-center font-bold py-3 rounded text-sm transition ${
                    tier.highlight
                      ? "bg-gold text-black hover:bg-gold-light"
                      : "border border-white/20 text-white hover:border-gold hover:text-gold"
                  }`}>
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">What Members Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover">
                <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gold text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to trade with<br /><span className="gold-gradient">real edge?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">Join 24+ traders already inside Apex Trading Systems. Start free — no credit card required.</p>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gold text-black font-black px-10 py-5 rounded text-lg hover:bg-gold-light transition">
            Join the Community →
          </a>
        </div>
      </section>

    </main>
  );
}
