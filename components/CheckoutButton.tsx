"use client";
import { useState } from "react";

interface Props {
  tier: string;
  label: string;
  style: React.CSSProperties;
}

export default function CheckoutButton({ tier, label, style }: Props) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (tier === "free") {
      window.open("https://discord.gg/83VwHsTbs", "_blank");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('Checkout error:', data);
        alert(`Error: ${data.error || 'Could not create checkout session. Please try again.'}`);
      }
    } catch (e) {
      console.error('Checkout fetch error:', e);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} disabled={loading} style={{
      ...style,
      cursor: loading ? "wait" : "pointer",
      opacity: loading ? 0.7 : 1,
      width: "100%",
    }}>
      {loading ? "Loading..." : label}
    </button>
  );
}
