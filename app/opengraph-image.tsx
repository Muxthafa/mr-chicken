import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${company.name} — Fresh Chicken & Mutton, Katpadi`;

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
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(40,102,110,0.12), transparent 55%), radial-gradient(circle at 10% 90%, rgba(163,180,162,0.25), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 18,
            backgroundColor: "#28666E",
            color: "#FFFFFF",
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          MR
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#0A0908",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {company.name}
        </div>
        <div style={{ fontSize: 30, color: "#28666E", marginTop: 20, fontWeight: 600 }}>
          {company.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
