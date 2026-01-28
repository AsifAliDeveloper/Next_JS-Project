import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "1rem",
          color: "#1f2937", // dark gray
        }}
      >
        Welcome to My Next.js App
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "1.25rem",
          marginBottom: "2rem",
          color: "#4b5563", // medium gray
        }}
      >
        Learning Next.js App Router step by step
      </p>

      {/* First Image */}
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "2rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "inline-block",
        }}
      >
        <Image
          src="/images/photo.jpg"
          alt="Sample"
          width={600}
          height={400}
          style={{ display: "block" }}
        />
      </div>

      {/* Hero Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
