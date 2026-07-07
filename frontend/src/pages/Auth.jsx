import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Auth() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/profile";

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await signup(email, password);
      }

      navigate(redirectTo, { replace: true });
    } catch (submitError) {
      setError(submitError.message || "Authentication failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid overflow-hidden rounded-[2rem] bg-white shadow-aura lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-aura-primary px-8 py-12 text-white sm:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-aura-secondary">
            AuraAR Access
          </p>
          <h1 className="mt-4 font-display text-4xl">Login or create your account</h1>
          <p className="mt-4 max-w-md text-sm text-white/85">
            Use authentication to save wishlists, personalize your profile, and continue
            building the full academic prototype. If Firebase is not configured yet, the
            app will use demo auth locally.
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/85">
            <p>Save items to wishlist</p>
            <p>Protect the profile page</p>
            <p>Prepare for Firebase Auth integration</p>
          </div>
        </div>

        <div className="px-8 py-12 sm:px-10">
          <div className="mb-8 flex gap-3">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={[
                "rounded-full px-5 py-2 text-sm font-semibold transition",
                mode === "login"
                  ? "bg-aura-accent text-white"
                  : "bg-aura-secondary/20 text-aura-primary"
              ].join(" ")}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={[
                "rounded-full px-5 py-2 text-sm font-semibold transition",
                mode === "signup"
                  ? "bg-aura-accent text-white"
                  : "bg-aura-secondary/20 text-aura-primary"
              ].join(" ")}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-aura-primary">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-aura-primary">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Minimum 6 characters"
                minLength={6}
                required
                className="w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"
              />
            </div>

            {error ? (
              <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-aura-primary px-6 py-3 font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-sm text-stone-500">
            Back to{" "}
            <Link to="/tryon" className="font-semibold text-aura-accent">
              AR Try-On
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
