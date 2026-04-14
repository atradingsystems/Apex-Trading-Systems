"use client";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import Link from "next/link";

const G = "#D4AF37";

interface Trade {
  id: number;
  date: string;
  instrument: string;
  direction: "LONG" | "SHORT";
  entry: number;
  stop: number;
  target: number;
  exit: number;
  rr: string;
  pnl: number;
  result: "WIN" | "LOSS";
  notes: string;
}

const sampleTrades: Trade[] = [
  { id: 1, date: "Apr 10", instrument: "MNQ", direction: "LONG", entry: 25294.25, stop: 25255.50, target: 25385.50, exit: 25385.50, rr: "2.4R", pnl: 1825, result: "WIN", notes: "8AM ORB setup, clean FVG entry" },
  { id: 2, date: "Apr 9", instrument: "ES", direction: "SHORT", entry: 5312.50, stop: 5320.00, target: 5297.00, exit: 5297.00, rr: "2.0R", pnl: 750, result: "WIN", notes: "London high swept, displacement down" },
  { id: 3, date: "Apr 9", instrument: "MNQ", direction: "LONG", entry: 18840.00, stop: 18810.00, target: 18900.00, exit: 18812.00, rr: "2.0R", pnl: -420, result: "LOSS", notes: "ORB failed, news event invalidated" },
  { id: 4, date: "Apr 8", instrument: "NQ", direction: "LONG", entry: 18700.00, stop: 18660.00, target: 18780.00, exit: 18780.00, rr: "2.0R", pnl: 1600, result: "WIN", notes: "Strong displacement off FVG" },
  { id: 5, date: "Apr 7", instrument: "MES", direction: "SHORT", entry: 5280.00, stop: 5287.50, target: 5265.00, exit: 5265.00, rr: "2.0R", pnl: 375, result: "WIN", notes: "Killzone sweep entry" },
];

const pnlChartData = [
  { day: "Apr 1", pnl: 0 },
  { day: "Apr 3", pnl: 620 },
  { day: "Apr 5", pnl: 1100 },
  { day: "Apr 7", pnl: 1475 },
  { day: "Apr 8", pnl: 3075 },
  { day: "Apr 9", pnl: 3405 },
  { day: "Apr 10", pnl: 5230 },
];

const defaultForm = { date: "", instrument: "MNQ", direction: "LONG", entry: "", stop: "", target: "", exit: "", pnl: "", notes: "" };

export default function Dashboard() {
  const [trades, setTrades] = useState<Trade[]>(sampleTrades);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<typeof defaultForm>(defaultForm);

  const totalPnL = trades.reduce((s, t) => s + t.pnl, 0);
  const wins = trades.filter(t => t.result === "WIN").length;
  const winRate = Math.round((wins / trades.length) * 100);
  const avgRR = "2.1R";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const pnl = parseFloat(form.pnl);
    const newTrade: Trade = {
      id: Date.now(),
      date: form.date || "Today",
      instrument: form.instrument,
      direction: form.direction as "LONG" | "SHORT",
      entry: parseFloat(form.entry),
      stop: parseFloat(form.stop),
      target: parseFloat(form.target),
      exit: parseFloat(form.exit) || parseFloat(form.target),
      rr: "2.0R",
      pnl,
      result: pnl >= 0 ? "WIN" : "LOSS",
      notes: form.notes,
    };
    setTrades([newTrade, ...trades]);
    setShowModal(false);
    setForm(defaultForm);
  }

  const statsCards = [
    { label: "Total P&L", value: `+$${totalPnL.toLocaleString()}`, color: "#00c853" },
    { label: "Win Rate", value: `${winRate}%`, color: G },
    { label: "Avg R:R", value: avgRR, color: G },
    { label: "Total Trades", value: trades.length.toString(), color: "#fff" },
  ];

  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "Arial Black, Arial, sans-serif" }}>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "18px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 20, letterSpacing: 2 }}>APEX</span>
          <span style={{ color: G, fontWeight: 400, fontSize: 13, letterSpacing: 3 }}>JOURNAL</span>
        </Link>
        <button onClick={() => setShowModal(true)} style={{ background: G, color: "#000", fontWeight: 900, padding: "12px 28px", borderRadius: 999, border: "none", cursor: "pointer", fontSize: 15 }}>
          + Log Trade
        </button>
      </nav>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 32px" }}>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
          {statsCards.map(s => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px" }}>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: 2, marginBottom: 8 }}>{s.label}</div>
              <div style={{ color: s.color, fontWeight: 900, fontSize: 36, letterSpacing: -1 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* P&L Chart */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px", marginBottom: 32 }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: 2, marginBottom: 20 }}>CUMULATIVE P&L</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={pnlChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="day" stroke="rgba(255,255,255,0.2)" tick={{ fontSize: 12 }} />
              <YAxis stroke="rgba(255,255,255,0.2)" tick={{ fontSize: 12 }} tickFormatter={v => `$${v}`} />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #D4AF37", borderRadius: 10, color: "#fff" }} formatter={(v: unknown) => [`$${v}`, "P&L"]} />
              <Line type="monotone" dataKey="pnl" stroke={G} strokeWidth={2.5} dot={{ fill: G, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Trades Table */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden" }}>
          <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: 2 }}>RECENT TRADES</span>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["DATE", "INSTRUMENT", "DIRECTION", "ENTRY", "STOP", "TARGET", "R:R", "P&L", "RESULT"].map(h => (
                  <th key={h} style={{ padding: "14px 16px", color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: 2, textAlign: "left", fontWeight: 400 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {trades.map((t, i) => (
                <tr key={t.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                  <td style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{t.date}</td>
                  <td style={{ padding: "16px", color: "#fff", fontWeight: 900, fontSize: 15 }}>{t.instrument}</td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ background: t.direction === "LONG" ? "rgba(0,200,83,0.15)" : "rgba(255,23,68,0.15)", color: t.direction === "LONG" ? "#00c853" : "#ff1744", padding: "4px 12px", borderRadius: 6, fontSize: 12, fontWeight: 900, letterSpacing: 1 }}>
                      {t.direction}
                    </span>
                  </td>
                  <td style={{ padding: "16px", color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{t.entry.toLocaleString()}</td>
                  <td style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{t.stop.toLocaleString()}</td>
                  <td style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{t.target.toLocaleString()}</td>
                  <td style={{ padding: "16px", color: G, fontWeight: 900, fontSize: 14 }}>{t.rr}</td>
                  <td style={{ padding: "16px", color: t.pnl >= 0 ? "#00c853" : "#ff1744", fontWeight: 900, fontSize: 15 }}>
                    {t.pnl >= 0 ? "+" : ""}${t.pnl.toLocaleString()}
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ background: t.result === "WIN" ? "rgba(0,200,83,0.12)" : "rgba(255,23,68,0.12)", color: t.result === "WIN" ? "#00c853" : "#ff1744", border: `1px solid ${t.result === "WIN" ? "rgba(0,200,83,0.3)" : "rgba(255,23,68,0.3)"}`, padding: "4px 14px", borderRadius: 999, fontSize: 12, fontWeight: 900 }}>
                      {t.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Log Trade Modal */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50, padding: 20 }}>
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 24, padding: "40px", width: "100%", maxWidth: 560, maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: -0.5 }}>Log Trade</h2>
              <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 24, cursor: "pointer" }}>×</button>
            </div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Date", key: "date", type: "date" },
                { label: "Entry Price", key: "entry", type: "number" },
                { label: "Stop Loss", key: "stop", type: "number" },
                { label: "Target", key: "target", type: "number" },
                { label: "Actual Exit", key: "exit", type: "number" },
                { label: "P&L ($)", key: "pnl", type: "number" },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: 2, display: "block", marginBottom: 6 }}>{f.label}</label>
                  <input
                    type={f.type}
                    value={(form as Record<string, string>)[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", color: "#fff", fontSize: 16, outline: "none", boxSizing: "border-box" }}
                  />
                </div>
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: 2, display: "block", marginBottom: 6 }}>INSTRUMENT</label>
                  <select value={form.instrument} onChange={e => setForm({ ...form, instrument: e.target.value })} style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", color: "#fff", fontSize: 16, outline: "none" }}>
                    {["ES", "NQ", "MNQ", "MES"].map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: 2, display: "block", marginBottom: 6 }}>DIRECTION</label>
                  <select value={form.direction} onChange={e => setForm({ ...form, direction: e.target.value })} style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", color: "#fff", fontSize: 16, outline: "none" }}>
                    <option value="LONG">Long</option>
                    <option value="SHORT">Short</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: 2, display: "block", marginBottom: 6 }}>NOTES</label>
                <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} rows={3} style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", color: "#fff", fontSize: 15, outline: "none", resize: "none", boxSizing: "border-box" }} />
              </div>
              <button type="submit" style={{ background: G, color: "#000", fontWeight: 900, padding: "16px", borderRadius: 12, border: "none", cursor: "pointer", fontSize: 17, marginTop: 8 }}>
                Save Trade
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
