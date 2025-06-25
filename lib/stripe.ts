import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Stripe secret key is not defined in environment variables");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-05-28.basil", // Use the latest stable version of the Stripe API
});

export default stripe;
