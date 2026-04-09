"use client";
import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Store email - for now just log and show success
    // TODO: Connect to email service (Mailchimp, ConvertKit, etc.)
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>✅</div>
        <div style={{ color: "#D4AF37", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Check your inbox!</div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>The ORB Strategy Guide is on its way.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, maxWidth: 480, margin: "0 auto", flexWrap: "wrap" as const, justifyContent: "center" }}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        style={{
          flex: 1,
          minWidth: 240,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 999,
          color: "#fff",
          fontSize: 15,
          padding: "14px 22px",
          outline: "none",
        }}
      />
      <button type="submit" disabled={loading} style={{
        background: "linear-gradient(135deg, #D4AF37, #F0D060, #C49A28)",
        borderRadius: 999,
        border: "none",
        color: "#000",
        fontWeight: 800,
        fontSize: 14,
        padding: "14px 28px",
        cursor: loading ? "wait" : "pointer",
        opacity: loading ? 0.7 : 1,
        whiteSpace: "nowrap" as const,
      }}>
        {loading ? "Sending..." : "Get Free Guide →"}
      </button>
    </form>
  );
}
