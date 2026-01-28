"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    path === "/dashboard"
      ? pathname.startsWith("/dashboard")
      : pathname === path;

  return (
    <nav
      style={{
        width: "100%",
        background: "#e5e7eb",
        padding: "1rem",
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/" className={isActive("/") ? "active" : ""}>
        Home
      </Link>

      <Link href="/about" className={isActive("/about") ? "active" : ""}>
        About
      </Link>

      <Link href="/blog" className={isActive("/blog") ? "active" : ""}>
        Blog
      </Link>

      <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
        Contact
      </Link>

      {/* Dashboard */}
      <Link
        href="/dashboard"
        className={isActive("/dashboard") ? "active" : ""}
      >
        Dashboard
      </Link>
    </nav>
  );
}
