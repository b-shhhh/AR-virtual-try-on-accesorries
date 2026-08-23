import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { getUserStats, getUserTryOns } from "../firebase/database";
import { getAccessoryById } from "../data/accessories";

function getInitials(email) {
  if (!email) return "U";
  return email
    .split("@")[0]
    .split(/[._-]/)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatDate(date) {
  if (!date) return "N/A";
  const value = date?.toDate?.() ?? new Date(date);

  return value.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    tryOns: 0,
    purchased: 0
  });
  const [recentTryOns, setRecentTryOns] = useState([]);

  useEffect(() => {
    if (!user?.uid) {
      return;
    }

    Promise.all([getUserStats(user.uid), getUserTryOns(user.uid)])
      .then(([firebaseStats, tryOns]) => {
        setStats(firebaseStats);
        setRecentTryOns(tryOns);
      })
      .catch(() => {
        setStats({
          tryOns: 0,
          purchased: 0
        });
        setRecentTryOns([]);
      });
  }, [user?.uid]);

  async function handleSignOut() {
    await logout();
    navigate("/", { replace: true });
  }

  if (!user) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-white p-8 shadow-aura">
          <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Profile</p>
          <h1 className="mt-3 font-display text-4xl text-aura-primary">Not Signed In</h1>
          <p className="mt-4 text-stone-600">
            Please{" "}
            <Link to="/auth" className="font-semibold text-aura-accent">
              sign in
            </Link>{" "}
            to view your profile.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-aura">
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Profile</p>
        <h1 className="mt-3 font-display text-4xl text-aura-primary">User Summary</h1>

        {/* Avatar and Member Since */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aura-primary text-2xl font-bold text-white">
            {getInitials(user.email)}
          </div>
          <div>
            <p className="font-display text-2xl text-aura-primary">{user.displayName || user.email?.split("@")[0]}</p>
            <p className="text-sm text-stone-500">
              Member since {formatDate(user.metadata?.creationTime || user.createdAt)}
            </p>
          </div>
        </div>

        {/* Stats Cards with Icons */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-aura-secondary/12 p-5">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-aura-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
              </svg>
              <p className="text-sm font-medium text-stone-600">Try-Ons</p>
            </div>
            <p className="mt-2 font-display text-3xl text-aura-charcoal">{stats.tryOns}</p>
            <p className="mt-1 text-xs text-stone-500">Virtual try-on sessions</p>
          </div>
          <div className="rounded-3xl bg-aura-secondary/12 p-5">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-aura-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h14l-1.35 6.75h-11.7L7 5h14l-1.35 6.75" />
              </svg>
              <p className="text-sm font-medium text-stone-600">Purchased</p>
            </div>
            <p className="mt-2 font-display text-3xl text-aura-charcoal">{stats.purchased}</p>
            <p className="mt-1 text-xs text-stone-500">Completed orders</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-aura-primary">Quick Actions</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              to="/try-on"
              className="rounded-full bg-aura-primary px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Try-On
            </Link>
            <Link
              to="/catalog"
              className="rounded-full border border-aura-primary bg-white px-5 py-2 text-sm font-semibold text-aura-primary transition hover:bg-aura-secondary/10"
            >
              Shop
            </Link>
          </div>
        </div>

        {/* Recent Try-Ons */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-aura-primary">Recent Try-Ons</h2>
          {recentTryOns.length > 0 ? (
            <div className="mt-3 divide-y divide-aura-secondary/20 rounded-3xl border border-aura-secondary/20 bg-white">
              {recentTryOns.map((tryOn) => {
                const accessory = getAccessoryById(tryOn.accessoryId ?? tryOn.productId);

                return (
                  <div key={tryOn.id} className="flex items-center justify-between gap-4 p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={accessory.thumbnailUrl}
                        alt={accessory.name}
                        className="h-12 w-12 rounded-2xl bg-aura-cream object-contain p-2"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/assets/products/earrings.png";
                        }}
                      />
                      <div>
                        <p className="font-medium text-aura-primary">{accessory.name}</p>
                        <p className="text-xs text-stone-500">
                          {formatDate(tryOn.createdAt ?? tryOn.timestamp)}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-aura-secondary/12 px-3 py-1 text-xs font-semibold text-aura-accent">
                      {tryOn.trackingStatus ?? "Saved"}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="mt-3 rounded-3xl border border-dashed border-aura-secondary/30 p-4 text-sm text-stone-500">
              No try-ons saved yet. Start the camera on the try-on page to save your first session.
            </p>
          )}
        </div>

        {/* Account Details */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-aura-primary">Account Details</h2>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between border-b border-aura-secondary/20 py-2">
              <span className="text-stone-500">Email</span>
              <span className="font-medium text-aura-primary">{user.email}</span>
            </div>
            <div className="flex justify-between border-b border-aura-secondary/20 py-2">
              <span className="text-stone-500">Account ID</span>
              <span className="font-mono text-xs text-aura-primary">{user.uid}</span>
            </div>
            <div className="flex justify-between border-b border-aura-secondary/20 py-2">
              <span className="text-stone-500">Email Verified</span>
              <span className="font-medium text-aura-primary">
                {user.emailVerified ? "Yes" : "No"}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-stone-500">Join Date</span>
              <span className="font-medium text-aura-primary">
                {formatDate(user.metadata?.creationTime || user.createdAt)}
              </span>
            </div>
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="mt-8">
          <button
            onClick={handleSignOut}
            className="rounded-full border border-rose-200 bg-rose-50 px-6 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
          >
            Sign Out
          </button>
        </div>
      </section>
    </main>
  );
}
