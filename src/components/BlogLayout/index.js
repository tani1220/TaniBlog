import { Container } from "src/components/Container";
import { Share } from "src/components/Share";
import styles from "./index.module.css";
import Head from "next/head";

export function Layout({ children, meta }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
        />
      </Head>
      <Container meta={meta}>
        <h1>{meta.title}</h1>
        <p>更新日：{meta.date}</p>

        <article
          className={styles.page}
          dangerouslySetInnerHTML={{ __html: children }}
        />

        <Share url={`https://tani.im/blog/${meta.id}`} text={meta.title} />
      </Container>
    </>
  );
}
