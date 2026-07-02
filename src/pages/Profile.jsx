import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { getUserStats } from "../services/api";

export default function Profile() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    tryOns: 0,
    wishlisted: 0,
    purchased: 0
  });

  useEffect(() => {
    if (!user?.uid) {
      return;
    }

    getUserStats(user.uid)
      .then(setStats)
      .catch(() => {
        setStats({
          tryOns: 0,
          wishlisted: 0,
          purchased: 0
        });
      });
  }, [user?.uid]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-aura">
        <p className="text-sm uppercase tracking-[0.3em] text-aura-accent">Profile</p>
        <h1 className="mt-3 font-display text-4xl text-aura-primary">User Summary</h1>
        <div className="mt-4 rounded-3xl bg-aura-secondary/15 p-5 text-sm text-stone-600">
          Signed in as <span className="font-semibold text-aura-primary">{user?.email}</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-aura-secondary/12 p-5">
            <p className="text-sm text-stone-500">Try-ons</p>
            <p className="mt-2 font-display text-3xl text-aura-charcoal">{stats.tryOns}</p>
          </div>
          <div className="rounded-3xl bg-aura-secondary/12 p-5">
            <p className="text-sm text-stone-500">Wishlisted</p>
            <p className="mt-2 font-display text-3xl text-aura-charcoal">{stats.wishlisted}</p>
          </div>
          <div className="rounded-3xl bg-aura-secondary/12 p-5">
            <p className="text-sm text-stone-500">Purchased</p>
            <p className="mt-2 font-display text-3xl text-aura-charcoal">{stats.purchased}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
