import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import styles from "./index.module.css";
import Head from "next/head";

export function Container({ children, meta: pageMeta }) {
  const meta = {
    title: "TaniBlog",
    description: "test",
    image: "https://leerob.io/static/images/banner.png",
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="article:published_time" content={meta.date} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="TaniBlog" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tani_im_" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  );
}
