// app/opengraph-image.tsx

import { ImageResponse } from "next/og";

// Route segment config
// export const runtime = "edge";

// Image metadata
export const alt = "Sumit So - Developer Advocate & Content Creator";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Create image URL that works in both dev and prod
  const baseUrl = "https://www.sumitso.in";
  const imageUrl = `${baseUrl}/sumit-home.png`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#f6f5f1",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "60px",
        }}
      >
        {/* Left side - Text content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "60px",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              color: "#353534",
              fontWeight: "600",
              marginBottom: "24px",
              lineHeight: "1.1",
            }}
          >
            SUMITSO.IN
          </div>

          <div
            style={{
              fontSize: "20px",
              color: "#4a4a46",
              lineHeight: "1.5",
              marginBottom: "20px",
            }}
          >
            Sumit So is a developer advocate at videoSDK.live, a platform that
            makes it easy for developers to integrate real-time video, audio,
            and interactive features.
          </div>
        </div>

        {/* Right side - Actual Profile Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "30px",
          }}
        >
          <img
            src={imageUrl}
            width="400"
            height="400"
            style={{
              borderRadius: "12px",
              objectFit: "cover",
              border: "2px solid #d1d5db",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
