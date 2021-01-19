import { NextSeo } from "next-seo";
import { MainLayout } from "../layouts/main";
import { ShortLetters } from "../components/ShortLetters";
import { Timeline } from "../components/Timeline";

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
