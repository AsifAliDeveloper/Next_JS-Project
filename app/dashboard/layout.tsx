import DashboardNavbar from "../components/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "220px", padding: "1rem", background: "#f3f4f6" }}>
        <DashboardNavbar />
      </aside>
      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
    </section>
  );
}
