import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "README.md",
  "NOTICE.md",
  "data/skill-catalog.en.json",
  "data/skill-catalog.zh.json",
  "data/competitive-snapshot.json",
  "source-skills/en/modern-web-guidance/SKILL.md",
  "source-skills/zh/modern-web-guidance/SKILL.md",
  "source-skills/en/chrome-extensions/SKILL.md",
  "source-skills/zh/chrome-extensions/SKILL.md",
  "docs/01-project-organization.md",
  "docs/02-testing-validation.md",
  "docs/03-competitive-analysis.md",
  "docs/04-deep-research-report.md",
  "docs/05-sharing-article.md"
];

const missing = requiredFiles.filter((file) => !existsSync(path.join(root, file)));
if (missing.length) {
  throw new Error(`Missing required files:\n${missing.join("\n")}`);
}

const en = JSON.parse(readFileSync(path.join(root, "data/skill-catalog.en.json"), "utf8"));
const zh = JSON.parse(readFileSync(path.join(root, "data/skill-catalog.zh.json"), "utf8"));
const competitors = JSON.parse(readFileSync(path.join(root, "data/competitive-snapshot.json"), "utf8"));

const enIds = en.skillPacks.map((item) => item.id).sort();
const zhIds = zh.skillPacks.map((item) => item.id).sort();
if (JSON.stringify(enIds) !== JSON.stringify(zhIds)) {
  throw new Error(`English and Chinese skill catalogs do not match: ${enIds} vs ${zhIds}`);
}

const mwg = zh.skillPacks.find((item) => item.id === "modern-web-guidance");
if (!mwg || mwg.guideCategories.length < 10) {
  throw new Error("Chinese Modern Web Guidance catalog is incomplete.");
}

if (!Array.isArray(competitors.repositories) || competitors.repositories.length < 8) {
  throw new Error("Competitive snapshot does not include enough comparable repositories.");
}

const docs = requiredFiles
  .filter((file) => file.endsWith(".md"))
  .map((file) => [file, readFileSync(path.join(root, file), "utf8")]);

for (const [file, content] of docs) {
  if (!content.trim()) {
    throw new Error(`${file} is empty.`);
  }
}

console.log("Structure verification passed.");
