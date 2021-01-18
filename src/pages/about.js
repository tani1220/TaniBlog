import { MainLayout } from "../layouts/main";
import { NextSeo } from "next-seo";
import React from "react";
import utilStyles from "../styles/utils.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const CircularUnderLoad = () => {
  return <CircularProgress disableShrink />;
};

export default function About() {
  return (
    <MainLayout>
      <NextSeo title="TaniBlog - About Me" description="自己紹介" />
      <h1>About Me</h1>
      <div className={utilStyles.circle}>
        <p>Coming soon …</p>
        <CircularUnderLoad />
      </div>
    </MainLayout>
  );
}
