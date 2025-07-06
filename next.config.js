const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async rewrites() {
    return [
      {
        source: "/opengraph-image.png",
        destination: "/opengraph-image",
      },
      {
        source: "/blogs/opengraph-image.png",
        destination: "/blogs/opengraph-image",
      },
      {
        source: "/blogs/:slug/opengraph-image.png",
        destination: "/blogs/:slug/opengraph-image",
      },
    ];
  },
});
