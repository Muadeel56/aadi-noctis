import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e0e14",
          borderRadius: 40,
          position: "relative",
        }}
      >
        {/* Crescent moon — noctis */}
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 9999,
            background: "#7dc8ff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 26,
            left: 66,
            width: 84,
            height: 84,
            borderRadius: 9999,
            background: "#0e0e14",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 42,
            right: 44,
            width: 16,
            height: 16,
            borderRadius: 9999,
            background: "#7dc8ff",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
