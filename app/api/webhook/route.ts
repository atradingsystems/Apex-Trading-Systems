import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN!;
const GUILD_ID = "1002258740516491296";
const ANNOUNCEMENTS_CHANNEL = "1481922637612716063";

const TIER_NAMES: Record<string, string> = {
  apex: "📚 Apex Member",
  elite: "👑 Elite Member",
  course: "📘 Course Only",
};

async function addDiscordRole(userId: string, roleId: string) {
  if (!userId) return;
  await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/members/${userId}/roles/${roleId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
}

async function assignRoleByUsername(username: string, roleId: string) {
  // Fetch guild members and find by username
  const res = await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/members?limit=1000`, {
    headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` },
  });
  const members = await res.json() as Array<{ user: { id: string; username: string } }>;
  const member = members.find(m =>
    m.user.username.toLowerCase() === username.toLowerCase()
  );
  if (member) {
    await addDiscordRole(member.user.id, roleId);
    console.log(`✅ Role assigned to ${member.user.username} (${member.user.id})`);
  } else {
    console.error(`❌ Could not find Discord member: ${username}`);
  }
}

async function removeDiscordRole(userId: string, roleId: string) {
  if (!userId) return;
  await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/members/${userId}/roles/${roleId}`, {
    method: "DELETE",
    headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` },
  });
}

const ORB_PRO_SCRIPT = `//@version=5
indicator("Apex ORB Pro", shorttitle="APEX ORB", overlay=true, max_lines_count=500, max_boxes_count=500)

// ═══════════════════════════════════════════════════════════════════════
//  APEX ORB PRO  |  apextradingsystems.io
//  Draws the 8:00-8:15 AM opening range box with midline to 12 PM
//  Works on 5m and 15m timeframes (ES, NQ, MES, MNQ)
// ═══════════════════════════════════════════════════════════════════════

// Inputs
boxColor    = input.color(color.new(#1a3cff, 80),  "Box Fill Color")
boxBorder   = input.color(color.new(#1a3cff, 20),  "Box Border Color")
midColor    = input.color(color.new(#D4AF37, 0),   "Midline Color")
highColor   = input.color(color.new(#00c87a, 40),  "High Line Color")
lowColor    = input.color(color.new(#ff4d4d, 40),  "Low Line Color")
midWidth    = input.int(2,  "Midline Width",  minval=1, maxval=4)

ET = "America/New_York"
barHour()   => hour(time, ET)
barMin()    => minute(time, ET)

inORBWindow()  => barHour() == 8 and barMin() >= 0  and barMin() < 15
afterORB()     => barHour() == 8 and barMin() >= 15
beforeNoon()   => barHour() < 12
atNoonOpen()   => barHour() == 12 and barMin() == 0

var float  orbHigh    = na
var float  orbLow     = na
var float  orbMid     = na
var int    orbStart   = na
var bool   boxDrawn   = false

if inORBWindow()
    if na(orbHigh)
        orbHigh  := high
        orbLow   := low
        orbStart := bar_index
        boxDrawn := false
    else
        orbHigh := math.max(orbHigh, high)
        orbLow  := math.min(orbLow,  low)
    orbMid := (orbHigh + orbLow) / 2.0

if afterORB() and beforeNoon() and not na(orbHigh) and not boxDrawn
    boxDrawn := true
    box.new(left=orbStart, top=orbHigh, right=bar_index, bottom=orbLow, border_color=boxBorder, bgcolor=boxColor, extend=extend.right)
    line.new(x1=orbStart, y1=orbHigh, x2=bar_index, y2=orbHigh, color=highColor, width=1, extend=extend.right)
    line.new(x1=orbStart, y1=orbLow,  x2=bar_index, y2=orbLow,  color=lowColor,  width=1, extend=extend.right)
    line.new(x1=orbStart, y1=orbMid,  x2=bar_index, y2=orbMid,  color=midColor,  width=midWidth, style=line.style_dashed, extend=extend.right)

if atNoonOpen()
    orbHigh  := na
    orbLow   := na
    orbMid   := na
    orbStart := na
    boxDrawn := false

bgcolor(inORBWindow() ? color.new(color.yellow, 88) : na, title="ORB Window Highlight")

orbActive    = not na(orbHigh) and afterORB() and beforeNoon()
breakoutUp   = orbActive and ta.crossover(close,  orbHigh)
breakoutDown = orbActive and ta.crossunder(close, orbLow)
midBreakUp   = orbActive and ta.crossover(close,  orbMid)
midBreakDown = orbActive and ta.crossunder(close, orbMid)

alertcondition(breakoutUp,   "ORB Breakout UP",   "ORB Breakout UP - price broke above ORB high")
alertcondition(breakoutDown, "ORB Breakout DOWN",  "ORB Breakout DOWN - price broke below ORB low")
alertcondition(midBreakUp,   "Midline Cross UP",   "Price crossed above ORB midline")
alertcondition(midBreakDown, "Midline Cross DOWN",  "Price crossed below ORB midline")`;

async function sendOrbProEmail(email: string, customerName: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Apex Trading Systems <noreply@apextradingsystems.io>",
      to: email,
      subject: "Your Apex ORB Pro Indicator — TradingView Pine Script",
      html: `
        <div style="background:#000;color:#fff;font-family:sans-serif;max-width:600px;margin:0 auto;padding:40px 32px;">
          <div style="margin-bottom:32px;">
            <span style="color:#D4AF37;font-weight:900;font-size:18px;letter-spacing:0.06em;">APEX TRADING SYSTEMS</span>
          </div>
          <h1 style="font-size:28px;font-weight:900;margin-bottom:8px;">Your indicator is ready ⚡</h1>
          <p style="color:rgba(255,255,255,0.5);margin-bottom:32px;">Thanks for purchasing Apex ORB Pro. Here's how to add it to TradingView in under 2 minutes.</p>

          <div style="background:#111;border:1px solid rgba(212,175,55,0.3);border-radius:12px;padding:24px;margin-bottom:24px;">
            <p style="font-weight:700;margin-bottom:16px;color:#D4AF37;">How to install:</p>
            <ol style="color:rgba(255,255,255,0.7);line-height:2;padding-left:20px;">
              <li>Open <a href="https://tradingview.com" style="color:#D4AF37;">TradingView</a> and load an ES or NQ chart</li>
              <li>Click <strong>Pine Editor</strong> at the bottom of the screen</li>
              <li>Delete any existing code, then paste the script below</li>
              <li>Click <strong>Add to chart</strong></li>
              <li>Switch to a <strong>5m or 15m</strong> timeframe</li>
              <li>Set your alerts using the Apex ORB Pro alert conditions</li>
            </ol>
          </div>

          <div style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:24px;margin-bottom:32px;">
            <p style="font-weight:700;margin-bottom:12px;font-size:13px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;">Pine Script — Copy all</p>
            <pre style="color:#D4AF37;font-size:11px;line-height:1.6;overflow-x:auto;white-space:pre-wrap;word-break:break-all;">${ORB_PRO_SCRIPT.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
          </div>

          <p style="color:rgba(255,255,255,0.4);font-size:13px;">Questions? Join our <a href="https://discord.gg/a9fJRsH3us" style="color:#D4AF37;">Discord community</a> — we're in there daily.</p>
          <p style="color:rgba(255,255,255,0.2);font-size:12px;margin-top:24px;">Apex Trading Systems &middot; <a href="https://apextradingsystems.io" style="color:rgba(255,255,255,0.2);">apextradingsystems.io</a></p>
        </div>
      `,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
  } else {
    console.log(`✅ ORB Pro email sent to ${email}`);
  }
}

async function postAnnouncement(tier: string, isCancel = false) {
  const tierName = TIER_NAMES[tier] || tier;

  const content = isCancel
    ? null
    : tier === "elite"
    ? `🎉 **A new Elite member just joined Apex Trading Systems!**\n\nWelcome to the top tier. Live alerts, mentorship, and weekly voice sessions await. Let's get it. 👑\n\n<#1482063220498763890> is live — stay locked in.`
    : tier === "apex"
    ? `📚 **A new Apex Member just joined!**\n\nFull course access, daily bias, signals, and weekly recaps — all yours. Welcome to the community. Let's build that edge. ⚡`
    : tier === "course"
    ? `📘 **Someone just grabbed lifetime Course access!**\n\nAll 9 modules, lifetime updates. Smart investment. Welcome to Apex Trading Systems. 🙌`
    : null;

  if (!content) return;

  await fetch(`https://discord.com/api/v10/channels/${ANNOUNCEMENTS_CHANNEL}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    return NextResponse.json({ error: "Webhook signature failed" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const { discordUserId, discordRoleId, tier } = session.metadata || {};

    // Get Discord username from custom field
    const discordUsernameField = session.custom_fields?.find(f => f.key === "discord_username");
    const discordUsername = discordUsernameField?.text?.value || "";

    if (discordUserId && discordRoleId) {
      await addDiscordRole(discordUserId, discordRoleId);
      console.log(`✅ Role ${discordRoleId} assigned to Discord user ${discordUserId}`);
    } else if (discordUsername && discordRoleId) {
      // Fall back to username lookup
      await assignRoleByUsername(discordUsername, discordRoleId);
      console.log(`✅ Role assigned to Discord username: ${discordUsername}`);
    }

    if (tier === "orb_pro") {
      const email = session.customer_details?.email;
      const name = session.customer_details?.name || "trader";
      if (email) {
        await sendOrbProEmail(email, name);
      } else {
        console.error("❌ No email found for orb_pro purchase");
      }
    } else if (tier) {
      await postAnnouncement(tier);
      console.log(`✅ Announcement posted for tier: ${tier}`);
    }
  }

  if (event.type === "customer.subscription.deleted") {
    const sub = event.data.object as Stripe.Subscription;
    const { discordUserId, discordRoleId } = sub.metadata || {};
    if (discordUserId && discordRoleId) {
      await removeDiscordRole(discordUserId, discordRoleId);
      console.log(`❌ Role removed from Discord user ${discordUserId}`);
    }
  }

  return NextResponse.json({ received: true });
}
