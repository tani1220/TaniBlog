import { MainLayout } from "../../layouts/main";
import utilStyles from "../../styles/utils.module.css";
import { NextSeo } from "next-seo";

export default function BlogId({ blog }) {
  return (
    <MainLayout>
      <NextSeo title={blog.title} description={blog.description} />
      <main className={utilStyles.foo}>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>
    </MainLayout>
  );
}

// 静的生成のためのパスを指定します
//getStaticPathsは静的生成(SSG)するため、idをgetStaticPropsに教えている。動的ルーティングはビルド時にとるべきパスを伝える必要がある。
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://traveler.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://traveler.microcms.io/api/v1/blog/" + id,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};

//記事をレンダーするコードをダイナミックルートに記述
