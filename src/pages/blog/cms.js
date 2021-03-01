import Link from "next/link";
import { Container } from "src/components/Container";
import { BlogCard } from "src/components/BlogCard";
import utilStyles from "src/styles/utils.module.css";
import React from "react";

export default function Page({ blog }) {
  return (
    <Container>
      <h1>MicroPage</h1>
      <h2>Next.js × MicroCMS</h2>
      <p>
        現在、私の記事はMarkdownで構成されていますが、以前は日本製ヘッドレスCMSであるMicroCMSを使っていました。下記の記事はMicroCMSから投稿されています。
      </p>
      <ul className={utilStyles.cards}>
        {blog.map((blog) => (
          <div key={blog.id}>
            <li>
              <Link href={`/micro/${blog.id}`}>
                <a className={utilStyles.card}>
                  <BlogCard
                    subTitle={blog.meta.description}
                    Image={blog.meta.image.url}
                    title={blog.title}
                  />
                </a>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </Container>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://traveler.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
