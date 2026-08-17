import { Link, useSearchParams } from "react-router-dom";

export default function CheckoutFailure() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId") || searchParams.get("refId") || searchParams.get("pid");

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-8 text-center shadow-aura">
        <div className="mb-6 flex justify-center">
          <svg className="h-16 w-16 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">eSewa payment</p>
        <h1 className="mt-2 font-display text-3xl text-aura-primary">Payment was not completed</h1>
        <p className="mt-4 text-stone-600">
          {orderId ? `Order #${orderId} is saved, but the wallet payment did not finish.` : "Your payment could not be processed."}
        </p>
        <p className="mt-2 text-sm text-stone-500">
          You can review it in your order history. Please try again or use a different payment method.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/checkout"
            className="rounded-full bg-aura-primary px-6 py-2 text-sm font-semibold text-white transition hover:opacity-95"
          >
            Try Again
          </Link>
          <Link
            to="/cart"
            className="rounded-full border border-aura-secondary/50 px-6 py-2 text-sm font-semibold text-aura-primary transition hover:bg-aura-secondary/10"
          >
            Back to Cart
          </Link>
        </div>
      </section>
    </main>
  );
}