import Link from "next/link";
import { NextSeo } from "next-seo";
import { MainLayout } from "src/layouts/main";
import { BlogPages } from "src/components/BlogPages";
import utilStyles from "src/styles/utils.module.css";
import React from "react";

export default function Page({ blog }) {
  return (
    <MainLayout>
      <NextSeo title="TaniBlog - BlogPages" description="記事一覧" />
      <h2>BlogPages</h2>
      <ul className={utilStyles.card}>
        {blog.map((blog) => (
          <div key={blog.id}>
            <li>
              <Link href={`/blog/${blog.id}`}>
                <a className={utilStyles.a}>
                  <BlogPages
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
    </MainLayout>
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
