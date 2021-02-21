import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const docsDirectory = join(process.cwd(), "data");

export function getDocById(id) {
  const realSlug = id.replace(/\.md$/, "");
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { id: realSlug, meta: data, content };
}

export function getAllDocs() {
  const ids = fs.readdirSync(docsDirectory);
  const docs = ids.map((id) => getDocById(id));

  return docs;
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(docsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
