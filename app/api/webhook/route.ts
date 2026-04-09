import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN!;
const GUILD_ID = "1002258740516491296";

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

async function removeDiscordRole(userId: string, roleId: string) {
  if (!userId) return;
  await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/members/${userId}/roles/${roleId}`, {
    method: "DELETE",
    headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` },
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
    const { discordUserId, discordRoleId } = session.metadata || {};
    if (discordUserId && discordRoleId) {
      await addDiscordRole(discordUserId, discordRoleId);
      console.log(`✅ Role ${discordRoleId} assigned to Discord user ${discordUserId}`);
    }
  }

  if (event.type === "customer.subscription.deleted") {
    const sub = event.data.object as Stripe.Subscription;
    const { discordUserId, discordRoleId } = sub.metadata || {};
    if (discordUserId && discordRoleId) {
      await removeDiscordRole(discordUserId, discordRoleId);
      console.log(`❌ Role ${discordRoleId} removed from Discord user ${discordUserId}`);
    }
  }

  return NextResponse.json({ received: true });
}
