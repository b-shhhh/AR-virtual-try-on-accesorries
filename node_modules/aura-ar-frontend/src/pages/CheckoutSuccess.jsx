import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function CheckoutSuccess() {
  const { clearCart } = useCart();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId") || searchParams.get("refId") || searchParams.get("pid");

  useEffect(() => {
    // Clear cart on successful payment
    clearCart();
  }, [clearCart]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-8 text-center shadow-aura">
        <div className="mb-6 flex justify-center">
          <svg className="h-16 w-16 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">eSewa payment</p>
        <h1 className="mt-2 font-display text-3xl text-aura-primary">Payment completed</h1>
        <p className="mt-4 text-stone-600">
          {orderId ? `Order #${orderId} has been marked as paid.` : "Your payment was successful!"}
        </p>
        <p className="mt-2 text-sm text-stone-500">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/profile"
            className="rounded-full bg-aura-primary px-6 py-2 text-sm font-semibold text-white transition hover:opacity-95"
          >
            View Profile
          </Link>
          <Link
            to="/shop"
            className="rounded-full border border-aura-secondary/50 px-6 py-2 text-sm font-semibold text-aura-primary transition hover:bg-aura-secondary/10"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}