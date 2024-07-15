import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { Button } from "@/design-system/button/Button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const SESSION_URL = "/api/checkout-session";

interface CheckoutFormProps {
  name: string;
  amount: number;
  id: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ name, amount, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prevCooldown) =>
          prevCooldown > 0 ? prevCooldown - 1 : 0
        );
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setCooldown(45);

    const customerEmail = "customer@example.com"; // Récupérez cela du formulaire de l'utilisateur
    const customerName = "Muhammed Cavus"; // Récupérez cela du formulaire de l'utilisateur

    try {
      const res = await fetch(`${SESSION_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, amount, id, customerEmail, customerName }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const session = await res.json();

      const result = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        setError(result.error.message || "An unknown error occurred");
      }
    } catch (error: any) {
      setError(error.message || "An unknown error occurred");
    } finally {
      setLoading(false); // Réinitialisation du chargement une fois terminé
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <Button
          variant="demi-link"
          icon="true"
          fontFamily="Courier"
          isLoading={!stripe || loading || cooldown > 0}
        >
          Réessayez dans {cooldown}s
        </Button>
      ) : (
        // <button type="submit" disabled={!stripe || loading || cooldown > 0}>
        //   Réessayez dans {cooldown}s
        // </button>
        <Button variant="demi-link" icon="true" fontFamily="Courier">
          {amount}€/projet
        </Button>
      )}
      {/* {error && <div>{error}</div>} */}
    </form>
  );
};

const Checkout: React.FC<{
  name: string;
  amount: number;
  id: number;
}> = ({ name, amount, id }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm name={name} amount={amount} id={id} />
  </Elements>
);

export default Checkout;
