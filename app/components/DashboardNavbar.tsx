"use client";
import Link from "next/link";

export default function DashboardNavbar() {
  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/profile">Profile</Link>
      <Link href="/dashboard/settings">Settings</Link>
    </nav>
  );
}
