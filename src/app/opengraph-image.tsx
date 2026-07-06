import { ImageResponse } from "next/og";

import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Dark branded share card — midnight background, accent glow, the tagline. */
export default function OgImage() {
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
          background: "#0e0e14",
          color: "#ececf1",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent glow, echoing the site's gradient mesh */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(96,190,255,0.28), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-250px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(96,190,255,0.16), transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#7dc8ff",
          }}
        >
          {SITE.fullName}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {SITE.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 30,
            color: "#9a9aac",
          }}
        >
          Full-stack engineer · React · Django · PostgreSQL · Cloudflare
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            color: "#7dc8ff",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 9999,
              background: "#7dc8ff",
              boxShadow: "0 0 24px rgba(125,200,255,0.9)",
            }}
          />
          {SITE.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
