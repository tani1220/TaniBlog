import { NextSeo } from "next-seo";
import { MainLayout } from "../layouts/main";
import { ShortLetters } from "../components/ShortLetters";
import { Timeline } from "../components/Timeline";

export default function Home({ blog }) {
  return (
    <MainLayout>
      <NextSeo
        title="My portfolio - Tani"
        openGraph={{
          url: "#",
          title: "My portfolio - Tani",
        }}
      />
      このポートフォリオは作成中です。
      <ShortLetters />
      <Timeline />
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

/*
<h2>BlogPages</h2>
      {blog.map((blog) => (
        <ul key={blog.id}>
          <li>
            <Link href={`blog/${blog.id}`}>
              <a className={utilStyles.a}>{blog.title}</a>
            </Link>
          </li>
        </ul>
      ))}
 */
