const DISCORD = "https://discord.gg/83VwHsTbs";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">

      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block border border-gold/40 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Built by a Trader.<br /><span className="gold-gradient">For Traders.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Apex Trading Systems was built on one belief: that serious traders deserve serious education — not recycled YouTube content and vague advice.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-300 leading-relaxed">
          <p>
            Most trading education is built to sell, not to teach. Courses that promise lambos. Discord servers full of noise. Indicators that don&apos;t work. Communities that disappear the moment you need help.
          </p>
          <p>
            Apex Trading Systems is different. We built this around a single methodology — <span className="text-white font-semibold">ICT concepts applied to MES futures</span> — and a single primary setup: the <span className="text-gold font-semibold">8AM Opening Range Breakout</span>.
          </p>
          <p>
            One instrument. One setup. Studied deeply. That&apos;s the edge.
          </p>
          <p>
            Our curriculum covers everything from TradingView setup to passing prop firm evaluations. 9 modules built to give you the complete picture — not just the entry, but the structure, the liquidity context, the risk framework, and the psychology that makes it all work in live markets.
          </p>
          <p>
            The community is small by design. We&apos;re not here to sell you a seat and disappear. We&apos;re here to build traders.
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-6 bg-white/2 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">The Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Market Structure First", desc: "Before any trade, you understand the HTF bias. Bullish or bearish. No ambiguity. Every trade aligns with higher timeframe structure." },
              { title: "Liquidity Drives Everything", desc: "We don't chase breakouts. We study where stop losses are resting and wait for price to sweep those levels before positioning." },
              { title: "FVGs as Entry Precision", desc: "Fair Value Gaps give us exact entry zones after a liquidity sweep. Not guessing — reading the imbalance left by institutional movement." },
              { title: "The 8AM ORB Edge", desc: "Our flagship setup. The Opening Range forms 8:00–8:30AM. We wait for the sweep, enter on the FVG, and target the opposite liquidity pool." },
              { title: "Risk is Non-Negotiable", desc: "Every trade is sized to a fixed percentage of capital. Daily limits. Drawdown rules. No exceptions. The account grows slowly — and stays grown." },
              { title: "Prop Firm Ready", desc: "The entire system is built to work within prop firm evaluation constraints. Pass your eval and scale to serious capital." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-1 bg-gold rounded flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8">Join the community for free. No credit card. No commitment.</p>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gold text-black font-bold px-8 py-4 rounded text-base hover:bg-gold-light transition">
            Join Apex Trading Systems →
          </a>
        </div>
      </section>

    </main>
  );
}
