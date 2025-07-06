import { ImageResponse } from "next/og";
import { getBlogPosts } from "./utils";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const alt = "Sumit So - Blogs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Create image URL (nodejs runtime can use URL strings directly)
  const baseUrl = "https://www.sumitso.in";

  const imageUrl = `${baseUrl}/sumit-home.png`;

  // Get recent 5 blog posts
  const allBlogs = getBlogPosts();
  const blogPosts = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 5)
    .map((post) => ({
      title: post.metadata.title,
      publishedAt: new Date(post.metadata.publishedAt).toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          year: "numeric",
        }
      ),
      summary: post.metadata.summary || "No summary available",
    }));

  return new ImageResponse(
    (
      // Root container
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
          fontFamily: '"Inter"',
          backgroundColor: "#f6f5f1",
        }}
      >
        {/* Left Panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            gap: "20px",
          }}
        >
          {/* Profile image */}
          <img
            src={imageUrl}
            width="100"
            height="100"
            style={{
              borderRadius: "100%",
              border: "2px solid #d1d5db",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              color: "#353534",
              textAlign: "center",
            }}
          >
            SUMITSO.IN/<span style={{ color: "#009688" }}>BLOGS</span>
          </div>
        </div>

        {/* Right Panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            padding: "20px",
            gap: "16px",
          }}
        >
          {blogPosts.slice(0, 5).map((post, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",

                background: index === 1 ? "#f0fdfa" : "#ffffff",
                border: index === 1 ? "2px solid #009688" : "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "16px",
                transform: `scale(${index === 1 ? 1.1 : 1})`,
                // height: "20%",
              }}
            >
              {/* Placeholder for blog image */}
              <div
                style={{
                  width: "100%",
                  background: "#f3f4f6",
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
              />
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#374151",
                  lineHeight: 1.3,
                  marginBottom: "6px",
                }}
              >
                {post.title.length > 60
                  ? post.title.substring(0, 60) + "..."
                  : post.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                {post.publishedAt}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      // ImageResponse options
      ...size,
    }
  );
}
