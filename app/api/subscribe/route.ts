import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "No email" }, { status: 400 });

  // Log email to file for now
  const logPath = path.join(process.cwd(), "email-leads.txt");
  const entry = `${new Date().toISOString()} - ${email}\n`;
  
  try {
    fs.appendFileSync(logPath, entry);
  } catch {}

  // Send via Resend if API key is available
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Apex Trading Systems <noreply@apextradingsystems.io>",
          to: email,
          subject: "Your Free 8AM ORB Strategy Guide",
          html: `
            <div style="background:#000;color:#fff;font-family:Arial,sans-serif;padding:40px;max-width:600px;margin:0 auto;">
              <h1 style="color:#D4AF37;font-size:28px;">Your Free ORB Strategy Guide</h1>
              <p style="color:#ccc;line-height:1.7;">Thanks for joining the Apex Trading Systems community.</p>
              <p style="color:#ccc;line-height:1.7;">Here's the 8AM ORB Strategy — the exact setup we trade every morning on ES & NQ futures.</p>
              
              <div style="background:#111;border:1px solid #D4AF37;border-radius:12px;padding:24px;margin:24px 0;">
                <h2 style="color:#D4AF37;font-size:18px;">The Setup in 6 Steps</h2>
                <ol style="color:#ccc;line-height:2;">
                  <li>Establish HTF bias (Daily → 4H → 1H) the night before</li>
                  <li>At 8:00AM, mark OR High and Low — do NOT trade yet</li>
                  <li>After 8:30AM, wait for a liquidity sweep of OR High or Low</li>
                  <li>Look for a Fair Value Gap after the sweep as entry trigger</li>
                  <li>Enter at 50% of FVG. Stop 3-5 ticks beyond sweep wick.</li>
                  <li>TP1 = opposite side of OR. TP2 = next liquidity pool. Close 50% at TP1.</li>
                </ol>
              </div>

              <p style="color:#ccc;">For the full 9-module curriculum, daily trade alerts, and live community:</p>
              <a href="https://apextradingsystems.io" style="display:inline-block;background:#D4AF37;color:#000;font-weight:bold;padding:14px 28px;border-radius:999px;text-decoration:none;margin-top:8px;">Join Apex Trading Systems →</a>
              
              <p style="color:#555;font-size:12px;margin-top:32px;">Apex Trading Systems · apextradingsystems.io · Not financial advice</p>
            </div>
          `,
        }),
      });
    } catch (err) {
      console.error("Resend error:", err);
    }
  }

  return NextResponse.json({ success: true });
}
