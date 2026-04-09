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

    if (tier) {
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
