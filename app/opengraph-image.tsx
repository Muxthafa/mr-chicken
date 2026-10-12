import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${company.name} — Fresh Chicken & Mutton, Katpadi`;

const maroon = "#70161E";
const cream = "#FDF9F6";
const ink = "#1A1210";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: cream,
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(112,22,30,0.08), transparent 55%), radial-gradient(circle at 10% 90%, rgba(201,168,138,0.35), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: maroon,
              fontFamily: "Georgia, serif",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            MR
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: ink,
            }}
          >
            Mutton and Chicken
          </div>
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: ink,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {company.name}
        </div>
        <div style={{ fontSize: 28, color: maroon, marginTop: 20, fontWeight: 600 }}>
          {company.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
