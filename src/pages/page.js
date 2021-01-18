import Link from "next/link";
import { NextSeo } from "next-seo";
import { MainLayout } from "../layouts/main";
import { BlogPages } from "../components/BlogPages";
import utilStyles from "../styles/utils.module.css";
import React from "react";

export default function Home({ blog }) {
  return (
    <MainLayout>
      <NextSeo
        title="BlogPages - Tani"
        openGraph={{
          url: "#",
          title: "BlogPages - Tani",
        }}
      />
      <h2>BlogPages</h2>
      <div className={utilStyles.div}>
        {blog.map((blog) => (
          <div key={blog.id}>
            <li>
              <Link href={`blog/${blog.id}`}>
                <a className={utilStyles.a}>
                  <BlogPages
                    subTitle={blog.subTitle}
                    Image={blog.film.url}
                    title={blog.title}
                    url={`https://tani-blog-git-main.tani1220.vercel.app/blog/${blog.id}`}
                  />
                </a>
              </Link>
            </li>
          </div>
        ))}
      </div>
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
