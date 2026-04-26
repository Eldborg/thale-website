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
      {/* Sculptural image — bottom-left (full color, blue/steel) */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "44vw",
          maxWidth: "640px",
          aspectRatio: "1 / 1",
          pointerEvents: "none",
        }}
      >
        <img
          src="/hero.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Sculptural image — top-right (greyscale, rotated) */}
      <div
        style={{
          position: "absolute",
          top: "-14%",
          right: "-7%",
          width: "40vw",
          maxWidth: "560px",
          aspectRatio: "1 / 1",
          pointerEvents: "none",
          filter: "saturate(0) brightness(1.08)",
          opacity: 0.9,
        }}
      >
        <img
          src="/hero.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
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
        {/* "Coming 2025" label */}
        <p
          style={{
            fontFamily: "'Geist', 'Inter', sans-serif",
            fontSize: "clamp(12px, 1.3vw, 16px)",
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.9)",
            letterSpacing: "0em",
            marginBottom: "clamp(20px, 3.5vw, 44px)",
          }}
        >
          Coming 2027
        </p>

        {/* Exact heading SVG from Framer — "Rethink / Money" */}
        <img
          src="/heading.svg"
          alt="Rethink Money"
          style={{
            width: "clamp(280px, 38vw, 520px)",
            height: "auto",
          }}
        />
      </div>
    </main>
  );
}
