import Link from "next/link";
import { Container } from "src/components/Container";
import { BlogCard } from "src/components/BlogCard";
import utilStyles from "src/styles/utils.module.css";
import React from "react";
import { getSortedPostsData } from "src/lib/docs";

export default function Page({ allPostsData }) {
  return (
    <Container>
      {/* <NextSeo title="TaniBlog - BlogPages" description="記事一覧" /> */}
      <h2>BlogPage</h2>
      <ul className={utilStyles.cards}>
        {allPostsData.map((allPostsData) => (
          <div key={allPostsData.id}>
            <li>
              <Link href={`/blog/${allPostsData.id}`}>
                <a className={utilStyles.card}>
                  <BlogCard
                    subTitle={allPostsData.description}
                    title={allPostsData.title}
                    Image={allPostsData.image}
                  />
                </a>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </Container>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
