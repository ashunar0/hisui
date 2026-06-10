import { Link } from "react-router";

const screens = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/mail", label: "Mail" },
  { to: "/chat", label: "Chat" },
  { to: "/settings", label: "Settings" },
  { to: "/login", label: "Login" },
  { to: "/signup", label: "Sign up" },
];

export function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-xl flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">ui-lab</h1>
        <p className="text-sm text-fg-muted">Screens & primitives sandbox</p>
      </div>
      <ul className="flex flex-col">
        {screens.map((s) => (
          <li key={s.to}>
            <Link
              to={s.to}
              className="flex items-center justify-between border-b border-border py-3 text-sm transition-colors hover:text-fg-soft"
            >
              <span>{s.label}</span>
              <span className="text-fg-muted">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
