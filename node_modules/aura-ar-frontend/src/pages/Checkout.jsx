import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

function getApiUrl() {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  return `${window.location.protocol}//${window.location.hostname}:4000`;
}

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isProcessing, setIsProcessing] = useState(false);

  async function handleCheckout() {
    setIsProcessing(true);

    if (paymentMethod === "esewa") {
      // eSewa payment integration
      await handleEsewaPayment();
    } else {
      // Cash on Delivery - simulate order processing
      await new Promise((resolve) => setTimeout(resolve, 1500));
      clearCart();
      navigate("/profile", { replace: true });
    }
  }

  async function handleEsewaPayment() {
    try {
      // Try to fetch eSewa config from backend
      const response = await fetch(`${getApiUrl()}/api/esewa/config?amount=${totalPrice}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      
      if (!response.ok) {
        throw new Error("Backend not available");
      }
      
      const data = await response.json();
      
      // Create a form and submit to eSewa
      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.formUrl;
      form.target = "_self";

      // Add all fields to form
      Object.entries(data.fields).forEach(([name, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Failed to initiate eSewa payment:", error);
      // Show error - backend is required for eSewa integration
      alert("Error: Unable to connect to payment server. Please ensure the backend server is running (node backend/server.mjs).");
      setIsProcessing(false);
    }
  }

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-white p-8 shadow-aura">
          <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Checkout</p>
          <h1 className="mt-3 font-display text-4xl text-aura-primary">No Items to Checkout</h1>
          <p className="mt-4 text-stone-600">
            Your cart is empty. Please add items from the{" "}
            <Link to="/shop" className="font-semibold text-aura-accent">
              shop
            </Link>
            .
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-aura">
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Checkout</p>
        <h1 className="mt-3 font-display text-4xl text-aura-primary">Payment</h1>

        {/* Order Summary */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-aura-primary">Order Summary</h2>
          <div className="mt-3 space-y-2">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-stone-600">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-medium text-aura-charcoal">
                  NPR {item.price * item.quantity}
                </span>
              </div>
            ))}
            <div className="border-t border-aura-secondary/20 pt-2">
              <div className="flex justify-between font-semibold">
                <span className="text-aura-primary">Total</span>
                <span className="text-aura-charcoal">NPR {totalPrice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-aura-primary">Payment Method</h2>
          <div className="mt-3 space-y-3">
            {/* Cash on Delivery */}
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-aura-secondary/30 p-4">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-aura-primary"
              />
              <div>
                <p className="font-medium text-aura-primary">Cash on Delivery</p>
                <p className="text-sm text-stone-500">Pay when you receive your order</p>
              </div>
            </label>

            {/* eSewa Wallet */}
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-aura-secondary/30 p-4">
              <input
                type="radio"
                name="payment"
                value="esewa"
                checked={paymentMethod === "esewa"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-aura-primary"
              />
              <div>
                <p className="font-medium text-aura-primary">Pay via eSewa</p>
                <p className="text-sm text-stone-500">Pay using eSewa digital wallet</p>
              </div>
            </label>
          </div>
        </div>

        {/* Shipping Address (for demo) */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-aura-primary">Shipping Address</h2>
          <div className="mt-3 rounded-2xl border border-aura-secondary/20 p-4">
            <p className="text-stone-600">
              {user?.email ? `${user.email?.split("@")[0]}'s Address` : "Demo Address"}
            </p>
            <p className="text-sm text-stone-500">Kathmandu, Nepal</p>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-8">
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full rounded-full bg-aura-primary px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isProcessing ? "Processing..." : `Place Order (${paymentMethod === "esewa" ? "eSewa" : "COD"})`}
          </button>
        </div>
      </section>
    </main>
  );
}
