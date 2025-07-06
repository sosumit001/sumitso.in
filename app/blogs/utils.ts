import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt?: string;
  summary?: string;
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  try {
    if (!fs.existsSync(dir)) {
      console.warn(`Directory does not exist: ${dir}`);
      return [];
    }
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return [];
  }
}

function readMDXFile(filePath) {
  try {
    let rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return {
      metadata: { title: "", publishedAt: "", summary: "" },
      content: "",
    };
  }
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles
    .map((file) => {
      let { metadata, content } = readMDXFile(path.join(dir, file));
      let slug = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
        content,
      };
    })
    .filter((post) => post.metadata.title); // Filter out failed reads
}

export function getBlogPosts() {
  // Try multiple possible paths for the posts directory
  const possiblePaths = [
    path.join(process.cwd(), "app", "blogs", "posts"),
    path.join(process.cwd(), "blogs", "posts"),
    path.join(__dirname, "..", "posts"),
    path.join(__dirname, "posts"),
    // Vercel-specific paths
    path.join("/var/task", "app", "blogs", "posts"),
    path.join("/var/task", "blogs", "posts"),
    // Additional fallbacks
    path.resolve("app/blogs/posts"),
    path.resolve("blogs/posts"),
    "./app/blogs/posts",
    "./blogs/posts",
  ];

  // Production vs Development environment detection
  const isProduction = process.env.NODE_ENV === "production";
  const isVercel = process.env.VERCEL === "1";

  if (isProduction) {
    console.log("Running in production mode");
    if (isVercel) {
      console.log("Running on Vercel");
    }
  }

  console.log("Current working directory:", process.cwd());
  console.log("__dirname:", __dirname);

  for (const postsPath of possiblePaths) {
    if (fs.existsSync(postsPath)) {
      console.log(`✅ Using posts directory: ${postsPath}`);
      const posts = getMDXData(postsPath);
      console.log(`Found ${posts.length} posts`);
      if (posts.length > 0) {
        return posts;
      }
    }
  }

  console.error(
    "❌ No posts directory found at any of the expected paths:",
    possiblePaths
  );
  return [];
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
