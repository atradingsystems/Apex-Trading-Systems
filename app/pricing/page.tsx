const DISCORD = "https://discord.gg/83VwHsTbs";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    desc: "Get oriented and explore the community.",
    features: {
      "Discord community": true,
      "General chat & market talk": true,
      "Modules 0–3": true,
      "Rules & orientation": true,
      "Full 9-module course": false,
      "Daily bias & trade ideas": false,
      "Signals & commentary": false,
      "Weekly recap": false,
      "Live trade alerts": false,
      "Elite trade setups": false,
      "Mentorship access": false,
      "Weekly voice sessions": false,
    },
    cta: "Join Free",
    href: DISCORD,
    highlight: false,
  },
  {
    name: "Apex Member",
    price: "$49",
    period: "/mo",
    desc: "Full course access plus daily content.",
    features: {
      "Discord community": true,
      "General chat & market talk": true,
      "Modules 0–3": true,
      "Rules & orientation": true,
      "Full 9-module course": true,
      "Daily bias & trade ideas": true,
      "Signals & commentary": true,
      "Weekly recap": true,
      "Live trade alerts": false,
      "Elite trade setups": false,
      "Mentorship access": false,
      "Weekly voice sessions": false,
    },
    cta: "Get Apex Access",
    href: DISCORD,
    highlight: false,
  },
  {
    name: "Elite",
    price: "$149",
    period: "/mo",
    desc: "Everything plus live alerts and mentorship.",
    features: {
      "Discord community": true,
      "General chat & market talk": true,
      "Modules 0–3": true,
      "Rules & orientation": true,
      "Full 9-module course": true,
      "Daily bias & trade ideas": true,
      "Signals & commentary": true,
      "Weekly recap": true,
      "Live trade alerts": true,
      "Elite trade setups": true,
      "Mentorship access": true,
      "Weekly voice sessions": true,
    },
    cta: "Go Elite",
    href: DISCORD,
    highlight: true,
  },
];

const faqs = [
  {
    q: "Do I need trading experience to join?",
    a: "No. The curriculum starts from absolute basics in Module 0. If you know what a candlestick is, you're ready to start.",
  },
  {
    q: "What platform do I need to trade MES?",
    a: "We recommend NinjaTrader or Tradovate. Both are free to start. Module 0 covers the full setup.",
  },
  {
    q: "What's the difference between Apex Member and Course Only?",
    a: "Apex Member gives you the course plus ongoing daily content, signals, and the active community. Course Only is lifetime access to the modules without the recurring community benefits.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes — cancel anytime. No contracts, no questions asked. Your access continues until the end of the billing period.",
  },
  {
    q: "Are the live trade alerts real-time?",
    a: "Yes. Elite members receive live alerts directly in the Discord #elite-trade-setups channel with full entry, stop, and target details.",
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">

      {/* Hero */}
      <section className="py-16 px-6 text-center border-b border-white/10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Simple, <span className="gold-gradient">Honest</span> Pricing
          </h1>
          <p className="text-gray-400 text-lg">Start free. Upgrade when you&apos;re ready. Cancel anytime.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name}
              className={`relative rounded-xl p-6 flex flex-col ${
                tier.highlight ? "bg-gold/10 border-2 border-gold" : "bg-white/5 border border-white/10"
              }`}>
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className={`font-bold text-xl mb-1 ${tier.highlight ? "text-gold" : "text-white"}`}>{tier.name}</h3>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-black">{tier.price}</span>
                <span className="text-gray-400 text-sm mb-1">{tier.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">{tier.desc}</p>
              <ul className="flex-1 space-y-3 mb-6">
                {Object.entries(tier.features).map(([feature, included]) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className={included ? "text-gold" : "text-white/20"}>
                      {included ? "✓" : "✕"}
                    </span>
                    <span className={included ? "text-gray-300" : "text-white/30"}>{feature}</span>
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

        {/* Course Only */}
        <div className="max-w-5xl mx-auto mt-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Course Only</h3>
              <p className="text-gray-400 text-sm">Lifetime access to all 9 modules. No subscription required.</p>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <span className="text-4xl font-black text-white">$297</span>
                <span className="text-gray-400 text-sm ml-1">one-time</span>
              </div>
              <a href={DISCORD} target="_blank" rel="noopener noreferrer"
                className="border border-white/20 text-white font-bold px-6 py-3 rounded text-sm hover:border-gold hover:text-gold transition whitespace-nowrap">
                Get Lifetime Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/10 pb-6">
                <h3 className="text-white font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
