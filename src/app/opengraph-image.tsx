import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg,#06070a 0%,#11141c 60%,#1a1e29 100%)",
          color: "#eef0f5",
        }}
      >
        <div style={{ fontSize: 28, color: "#5eead4", letterSpacing: 4 }}>KUSHBATRA.COM</div>
        <div style={{ marginTop: 28, fontSize: 68, fontWeight: 600, lineHeight: 1.1, maxWidth: 980 }}>{profile.headline}</div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#aab1c2" }}>{`${profile.name} · ${profile.title}`}</div>
      </div>
    ),
    size
  );
}
