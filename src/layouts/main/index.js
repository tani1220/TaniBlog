import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import styles from "./index.module.css";

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  );
}
