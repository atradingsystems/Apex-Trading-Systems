import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

const PRICES: Record<string, string> = {
  apex: "price_1TKEZrQkce3MIQeLloUOii8D",
  elite: "price_1TKEaLQkce3MIQeL7VEP2b9R",
  course: "price_1TKEalQkce3MIQeLSv9F55aO",
  orb_pro: "price_1TMCJzQkce3MIQeLtWbgUUga",
};

const DISCORD_ROLES: Record<string, string> = {
  apex: "1481792798251548682",   // 📚 Apex Member
  elite: "1481792591711309966",  // 👑 Elite Member
  course: "1481793059669803110", // 📘 Course Only
};

export async function POST(req: NextRequest) {
  const { tier, discordUserId, discordUsername } = await req.json();

  if (!tier || !PRICES[tier]) {
    return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
  }

  const isSubscription = tier !== "course" && tier !== "orb_pro";
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://apextradingsystems.io";

  try {
  const session = await stripe.checkout.sessions.create({
    mode: isSubscription ? "subscription" : "payment",
    line_items: [{ price: PRICES[tier], quantity: 1 }],
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&tier=${tier}`,
    cancel_url: `${baseUrl}/pricing`,
    metadata: {
      tier,
      discordUserId: discordUserId || "",
      discordUsername: discordUsername || "",
      discordRoleId: DISCORD_ROLES[tier],
    },
    custom_fields: tier === "orb_pro" ? [] : [
      {
        key: "discord_username",
        label: { type: "custom", custom: "Your Discord Username" },
        type: "text",
        optional: false,
      }
    ],
    allow_promotion_codes: true,
  });

  return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Stripe checkout error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
