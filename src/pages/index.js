import { NextSeo } from "next-seo";
import { MainLayout } from "../layouts/main";
import { ShortLetters } from "../components/ShortLetters";
import { Timeline } from "../components/Timeline";

export default function Home() {
  return (
    <MainLayout>
      <NextSeo
        title="TaniBlog - Home"
        description="TaniBlogのホーム画面です。"
      />
      このポートフォリオは作成中です。
      <ShortLetters />
      <Timeline />
    </MainLayout>
  );
}
