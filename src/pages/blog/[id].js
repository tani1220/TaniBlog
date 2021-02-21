import { getAllDocs, getDocById } from "src/lib/docs";
import markdownToHtml from "src/lib/markdown";
import { Layout } from "src/components/BlogLayout";

export default function Doc({ meta, content }) {
  return <Layout meta={meta}>{content}</Layout>;
}

export async function getStaticProps({ params }) {
  const doc = getDocById(params.id);
  const content = await markdownToHtml(doc.content || "");

  return {
    props: {
      ...doc,
      content,
    },
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();
  const paths = docs.map((doc) => `/blog/${doc.id}`);

  return { paths, fallback: false };
}
