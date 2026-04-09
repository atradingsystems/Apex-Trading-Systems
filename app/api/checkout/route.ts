import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

const PRICES: Record<string, string> = {
  apex: "price_1TKEZrQkce3MIQeLloUOii8D",
  elite: "price_1TKEaLQkce3MIQeL7VEP2b9R",
  course: "price_1TKEalQkce3MIQeLSv9F55aO",
};

const DISCORD_ROLES: Record<string, string> = {
  apex: "1481792798251548682",   // 📚 Apex Member
  elite: "1481792591711309966",  // 👑 Elite Member
  course: "1481793059669803110", // 📘 Course Only
};

export async function POST(req: NextRequest) {
  const { tier, discordUserId } = await req.json();

  if (!tier || !PRICES[tier]) {
    return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
  }

  const isSubscription = tier !== "course";
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://apextradingsystems.io";

  const session = await stripe.checkout.sessions.create({
    mode: isSubscription ? "subscription" : "payment",
    line_items: [{ price: PRICES[tier], quantity: 1 }],
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&tier=${tier}`,
    cancel_url: `${baseUrl}/pricing`,
    metadata: {
      tier,
      discordUserId: discordUserId || "",
      discordRoleId: DISCORD_ROLES[tier],
    },
    allow_promotion_codes: true,
  });

  return NextResponse.json({ url: session.url });
}
