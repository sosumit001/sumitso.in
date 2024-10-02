import fs from 'fs';
import path from 'path';

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
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getDirectories(dir: string) {
  return fs.readdirSync(dir).filter((file) => fs.statSync(path.join(dir, file)).isDirectory());
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let explorations = getDirectories(dir);
  return explorations.map((exploration) => {
    let chaptersDir = path.join(dir, exploration);
    
    // Read `overview.mdx` instead of `metadata.json`
    let { metadata, content } = readMDXFile(path.join(chaptersDir, 'overview.mdx'));

    let chapters = getMDXFiles(chaptersDir)
      .filter((file) => file !== 'overview.mdx') // Exclude `overview.mdx`
      .map((file) => {
        let { metadata: chapterMetadata, content } = readMDXFile(path.join(chaptersDir, file));
        let chapterSlug = path.basename(file, path.extname(file));

        return {
          metadata: chapterMetadata,
          slug: chapterSlug,
          content,
        };
      });

    return {
      exploration,
      metadata, // From `overview.mdx`
      overviewContent: content, // Content from `overview.mdx`
      chapters,
    };
  });
}

export function getExplorations() {
  return getMDXData(path.join(process.cwd(), 'app', 'explora', 'exploras'));
}
