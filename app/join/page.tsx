"use client";
import { useEffect } from "react";

export default function Join() {
  useEffect(() => {
    window.location.href = "https://discord.gg/a9fJRsH3us";
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">⚡</div>
        <p className="text-gray-400">Redirecting you to Discord...</p>
        <a href="https://discord.gg/a9fJRsH3us" className="text-gold underline mt-2 block text-sm">
          Click here if you&apos;re not redirected
        </a>
      </div>
    </main>
  );
}
