import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/tryon", label: "Try On" },
  { to: "/about", label: "About" },
  { to: "/profile", label: "Profile" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-rose-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold text-aura-primary">AuraAR</p>
          <p className="text-sm text-stone-500">Virtual accessories try-on</p>
        </div>

        <nav className="flex flex-wrap gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-aura-primary text-white"
                    : "text-stone-600 hover:bg-rose-50 hover:text-aura-primary"
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
