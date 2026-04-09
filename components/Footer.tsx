import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-3">
              <span className="gold-gradient">APEX</span>
              <span className="text-white ml-2 font-light text-base">TRADING SYSTEMS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A futures trading education and community platform built around structure, repeatability, and professional-grade execution.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white text-sm transition">About</Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white text-sm transition">Pricing</Link>
              <Link href="/join" className="text-gray-400 hover:text-white text-sm transition">Join Discord</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Community</h4>
            <div className="flex flex-col gap-2">
              <a href="https://discord.gg/83VwHsTbs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition">Discord Server</a>
              <a href="https://x.com/apextrading00" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition">X / Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">© 2026 Apex Trading Systems. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Nothing on this site constitutes financial advice. Trade at your own risk.</p>
        </div>
      </div>
    </footer>
  );
}
