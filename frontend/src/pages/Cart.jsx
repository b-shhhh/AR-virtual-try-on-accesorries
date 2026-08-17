import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-white p-8 shadow-aura">
          <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Cart</p>
          <h1 className="mt-3 font-display text-4xl text-aura-primary">Your Cart is Empty</h1>
          <p className="mt-4 text-stone-600">
            Browse our{" "}
            <Link to="/catalog" className="font-semibold text-aura-accent">
              catalog
            </Link>{" "}
            to add items.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-aura">
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Cart</p>
        <h1 className="mt-3 font-display text-4xl text-aura-primary">Shopping Cart</h1>

        <div className="mt-6 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-2xl border border-aura-secondary/20 p-4"
            >
              <img
                src={item.thumbnailUrl}
                alt={item.name}
                className="h-16 w-16 rounded-lg object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/products/earrings.png";
                }}
              />
              <div className="flex-1">
                <h3 className="font-display text-lg text-aura-charcoal">{item.name}</h3>
                <p className="text-sm text-stone-500">NPR {item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="rounded-full bg-aura-secondary/20 px-3 py-1 text-sm font-semibold text-aura-primary"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="rounded-full bg-aura-secondary/20 px-3 py-1 text-sm font-semibold text-aura-primary"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-aura-secondary/20 pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-aura-primary">Total</span>
            <span className="text-aura-charcoal">NPR {totalPrice}</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={clearCart}
            className="rounded-full border border-aura-secondary/50 bg-white px-5 py-2 text-sm font-semibold text-aura-primary"
          >
            Clear Cart
          </button>
          <Link
            to="/checkout"
            className="rounded-full bg-aura-primary px-5 py-2 text-sm font-semibold text-white"
          >
            Proceed to Checkout
          </Link>
        </div>
      </section>
    </main>
  );
}