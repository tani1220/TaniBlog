import { MainLayout } from "../layouts/main";
import React from "react";
import utilStyles from "../styles/utils.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const CircularUnderLoad = () => {
  return <CircularProgress disableShrink />;
};

export default function About() {
  return (
    <MainLayout>
      <h1>About Me</h1>
      <div className={utilStyles.circle}>
        <p>Coming soon …</p>
        <CircularUnderLoad />
      </div>
    </MainLayout>
  );
}
