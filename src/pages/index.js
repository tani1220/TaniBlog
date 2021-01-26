import { NextSeo } from "next-seo";
import { MainLayout } from "src/layouts/main";
import { ShortLetters } from "src/components/ShortLetters";
import { Timeline } from "src/components/Timeline";

export default function Home() {
  return (
    <MainLayout>
      <NextSeo
        title="TaniBlog - About"
        description="TaniBlogの自己紹介ページです。"
      />
      <ShortLetters />
      <Timeline />
    </MainLayout>
  );
}
