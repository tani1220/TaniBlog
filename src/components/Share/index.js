import React from "react";
import styles from "./index.module.css";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
} from "react-share";

export const Share = ({ text, url }) => {
  return (
    <>
      <p className={styles.text}>シェアる？</p>
      <ul className={styles.share}>
        <li className="mr-8">
          <TwitterShareButton url={url} title={text}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </li>
        <li>
          <FacebookShareButton url={url} title={text}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </li>
        <li>
          <HatenaShareButton url={url} title={text}>
            <HatenaIcon size={32} round={true} />
          </HatenaShareButton>
        </li>
        <li>
          <LineShareButton url={url} title={text}>
            <LineIcon size={32} round={true} />
          </LineShareButton>
        </li>
      </ul>
    </>
  );
};
