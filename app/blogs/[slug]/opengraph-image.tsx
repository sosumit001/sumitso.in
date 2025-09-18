import { ImageResponse } from "next/og";
// Updated import path to match the working page.tsx file
import { getBlogPosts } from "@/blogs/utils";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const alt = "Sumit So - Blog Post"; // More specific alt text
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  try {
    // 1. Find the specific blog post using the slug from the URL
    const allPosts = getBlogPosts();

    // Debug logging (will show in Vercel function logs)
    if (allPosts.length === 0) {
      console.error("No posts found! This indicates a file system issue.");
    }

    const post = allPosts.find((p) => p.slug === params.slug);

    // 2. Handle the case where the post is not found
    if (!post) {
      return new Response(
        `Failed to generate OG Image: Post not found for slug: ${
          params.slug
        }. Available slugs: ${allPosts.map((p) => p.slug).join(", ")}`,
        {
          status: 404,
        }
      );
    }

    // 3. Extract metadata for the specific post
    const { title, publishedAt } = post.metadata;

    // Add validation for required fields
    if (!title || !publishedAt) {
      return new Response(
        `Missing required metadata: title=${title}, publishedAt=${publishedAt}`,
        {
          status: 400,
        }
      );
    }

    const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    // Author image URL
    const baseUrl = "https://www.sumitso.in";
    const authorImageUrl = `${baseUrl}/sumit-home.png`;

    return new ImageResponse(
      (
        // Root container - redesigned for a single post
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "80px",
            justifyContent: "center",
            // justifyContent: "space-between", // Pushes content apart
            height: "100%",
            width: "100%",
            fontFamily: '"Inter"', // Make sure to load this font if you switch to edge runtime
            backgroundColor: "#f6f5f1",
            padding: "60px",
            textAlign: "center",
          }}
        >
          {/* Top Branding */}
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              color: "#353534",
            }}
          >
            SUMITSO.IN/<span style={{ color: "#009688" }}>BLOGS</span>
          </div>

          {/* Main Content: Post Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "#1a1a1a",
                lineHeight: 1.2,
                margin: 0,
                padding: "0 20px", // Add some horizontal padding
              }}
            >
              {title}
            </h1>
          </div>

          {/* Bottom Author Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <img
              src={authorImageUrl}
              width="60"
              height="60"
              style={{
                borderRadius: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 600, color: "#353534" }}>
                {"Sumit So"}
              </div>
              <div style={{ fontSize: 20, color: "#6b7280" }}>
                {formattedDate}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
        // If you were using the edge runtime, you would need to fetch and provide fonts here.
        // With the nodejs runtime, it has better system font support.
      }
    );
  } catch (error: any) {
    console.error("Error generating OG image:", error);
    return new Response(
      `Failed to generate OG Image: ${error?.message || "Unknown error"}`,
      {
        status: 500,
      }
    );
  }
}
