import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "./index.module.css";

export function MainLayout({ children }) {
  return (
    <>
      <Header />


      <main className={styles.content}>{children}</main  >
      <Footer />
    </>
  );
}
