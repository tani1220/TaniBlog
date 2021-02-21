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
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  );
}
