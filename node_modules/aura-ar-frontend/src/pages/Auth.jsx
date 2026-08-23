import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Auth() {
  const [mode, setMode] = useState("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/";

  function resetSignupOnlyFields() {
    setFullName("");
    setConfirmPassword("");
    setAddress("");
    setPhoneNumber("");
  }

  function switchMode(nextMode) {
    setMode(nextMode);
    setError("");
    if (nextMode === "login") {
      resetSignupOnlyFields();
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (mode === "signup") {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      if (!fullName.trim()) {
        setError("Please enter your full name.");
        return;
      }
      if (!/^\d{10}$/.test(phoneNumber.trim())) {
        setError("Phone number must be exactly 10 digits.");
        return;
      }
      if (!address.trim()) {
        setError("Please enter your address.");
        return;
      }
      if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{8,}$/.test(password)) {
        setError(
          "Password must be at least 8 characters, include one uppercase letter and one number, and contain no special characters."
        );
        return;
      }
    }

    setSubmitting(true);

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await signup(email, password, {
          fullName: fullName.trim(),
          address: address.trim(),
          phoneNumber: phoneNumber.trim()
        });
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
          <h1 className="mt-4 font-display text-4xl">Your Personalized Fashion Experience</h1>
          <p className="mt-4 max-w-md text-sm text-white/85">
            Sign in to unlock a smarter way to shop. Save your favorite accessories, manage your profile, and enjoy a personalized virtual try-on experience powered by AI and Augmented Reality.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl">
            <img
              src="/assets/image/auth hero.jpg"
              alt="Woman trying on jewelry, comparing a phone AR preview to how it looks in person"
              className="h-64 w-full object-cover object-[center_20%] sm:h-72"
            />
          </div>
        </div>

        <div className="px-8 py-12 sm:px-10">
          <div className="mb-8 flex gap-3">
            <button
              type="button"
              onClick={() => switchMode("login")}
              className={[
                "rounded-full px-5 py-2 text-sm font-semibold transition",
                mode === "login"
                  ? "bg-aura-accent text-white"
                  : "bg-aura-secondary/20 text-aura-primary"
              ].join(" ")}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => switchMode("signup")}
              className={[
                "rounded-full px-5 py-2 text-sm font-semibold transition",
                mode === "signup"
                  ? "bg-aura-accent text-white"
                  : "bg-aura-secondary/20 text-aura-primary"
              ].join(" ")}
            >
              Create Account
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === "signup" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-aura-primary">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Your full name"
                  required
                  className="w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"
                />
              </div>
            ) : null}

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

            {mode === "signup" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-aura-primary">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(event) =>
                    setPhoneNumber(event.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  placeholder="98XXXXXXXX"
                  maxLength={10}
                  required
                  className="w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"
                />
              </div>
            ) : null}

            {mode === "signup" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-aura-primary">
                  Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Street, city, Nepal"
                  required
                  className="w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"
                />
              </div>
            ) : null}

            <div>
              <label className="mb-2 block text-sm font-medium text-aura-primary">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={
                  mode === "signup"
                    ? "Min 8 chars, 1 uppercase, 1 number"
                    : "Enter your password"
                }
                minLength={mode === "signup" ? 8 : undefined}
                required
                className="w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"
              />
            </div>

            {mode === "signup" ? (
              <div>
                <label className="mb-2 block text-sm font-medium text-aura-primary">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Re-enter your password"
                  minLength={8}
                  required
                  className="w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"
                />
              </div>
            ) : null}

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
              {submitting ? "Please wait..." : mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-sm text-stone-500">
            Back to{" "}
            <Link to="/" className="font-semibold text-aura-accent">
              Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}