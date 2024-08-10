import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
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
        <div className="flex items-center align-middle">
          <Button
            variant="demi-link"
            icon="true"
            fontFamily="Courier"
            isLoading={!stripe || loading || cooldown > 0}
          >
            Réessayez dans {cooldown}s
          </Button>
        </div>
      ) : (
        // <button type="submit" disabled={!stripe || loading || cooldown > 0}>
        //   Réessayez dans {cooldown}s
        // </button>
        <div className="flex flex-row gap-2.5">
          {/* <Image src="/svg/coins-fill.svg" alt="" width={22} height={22} /> */}

          <Button variant="demi-link" icon="false" fontFamily="Courier">
            Acompte -:- {amount}€
          </Button>
        </div>
      )}
      {/* {error && <div>{error}</div>} */}
    </form>
  );
};

const CheckoutLater: React.FC<{
  name: string;
  amount: number;
  id: number;
}> = ({ name, amount, id }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm name={name} amount={amount * 0.2} id={id} />
  </Elements>
);

export default CheckoutLater;
