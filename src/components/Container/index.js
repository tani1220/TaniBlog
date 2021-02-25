import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import styles from "./index.module.css";
import Head from "next/head";

export function Container({ children, meta: pageMeta }) {
  const meta = {
    title: "TaniBlog",
    description: "test",
    cardImage:
      "https://tani.im/_next/image?url=%2Fstatic%2Fimages%2Fscreen.png&w=1920&q=75",
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="article:published_time" content={meta.date} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TaniBlog" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tani_im_" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  );
}
