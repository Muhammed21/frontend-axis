import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, amount, id, customerEmail, customerName } = req.body;

    console.log("Received data:", {
      name,
      amount,
      id,
      customerEmail,
      customerName,
    });

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: name,
              },
              unit_amount: amount * 100, // Montant en centimes
            },
            quantity: 1,
          },
        ],
        customer_email: customerEmail,
        metadata: {
          customerName: customerName,
          planId: id,
        },
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (err: any) {
      console.error("Stripe error:", err);
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
