export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Hero sculptural image — bottom-left (blue/steel tinted) */}
      <div
        style={{
          position: "absolute",
          bottom: "-8%",
          left: "-4%",
          width: "42vw",
          maxWidth: "600px",
          aspectRatio: "1 / 1",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <img
          src="/hero.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Hero sculptural image — top-right (desaturated, lighter) */}
      <div
        style={{
          position: "absolute",
          top: "-12%",
          right: "-6%",
          width: "38vw",
          maxWidth: "520px",
          aspectRatio: "1 / 1",
          pointerEvents: "none",
          userSelect: "none",
          filter: "saturate(0) brightness(1.05)",
          opacity: 0.85,
        }}
      >
        <img
          src="/hero.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            transform: "rotate(180deg) scaleX(-1)",
          }}
        />
      </div>

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Coming 2025 */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            fontWeight: 400,
            color: "#1a1a1a",
            letterSpacing: "0.01em",
            marginBottom: "clamp(18px, 3vw, 36px)",
          }}
        >
          Coming 2025
        </p>

        {/* Rethink */}
        <h1
          style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: "clamp(68px, 11vw, 160px)",
            fontWeight: 400,
            color: "#0d1117",
            lineHeight: 0.92,
            letterSpacing: "-0.01em",
          }}
        >
          Rethink
        </h1>

        {/* Divider line */}
        <div
          style={{
            width: "clamp(44px, 5.5vw, 72px)",
            height: "1px",
            background: "#1a1a1a",
            margin: "clamp(18px, 2.8vw, 30px) auto",
          }}
        />

        {/* Money */}
        <h2
          style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: "clamp(68px, 11vw, 160px)",
            fontWeight: 400,
            color: "#0d1117",
            lineHeight: 0.92,
            letterSpacing: "-0.01em",
          }}
        >
          Money
        </h2>
      </div>
    </main>
  );
}
