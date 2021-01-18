import { MainLayout } from "../../layouts/main";
import utilStyles from "../../styles/utils.module.css";
import { Share } from "../../components/Share";
import Head from "next/head";

export default function BlogId({ blog }) {
  return (
    <MainLayout>
      <main className={utilStyles.foo}>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>
      <Share
        url={`https://tani-blog-git-main.tani1220.vercel.app/blog/${blog.id}`}
        title={blog.title}
      />
    </MainLayout>
  );
}

// 動的ルーティングはビルド時に静的レンダリングするパスの一覧を定義する必要がある。
//getStaticPathsはパス(id)をgetStaticPropsに渡している。
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://traveler.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  //記事にもとづいてプリレンダリングするパスを取得
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false }; //getStaticPropsの(引数)に渡される
};

// SSG - データをテンプレートに受け渡す部分の処理を記述(ビルド時に実行)
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
    //propsキーの{}がコンポーネントに渡される。
    //つまり、SSG内で定義した変数(data)をblogキーに渡してpropsとしてreturnしている。
    //コンポーネントBlogIDに渡される
    props: {
      blog: data,
    },
  };
};

//記事をレンダーするコードをダイナミックルートに記述
