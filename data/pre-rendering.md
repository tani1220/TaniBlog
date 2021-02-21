---
title: "classNameで発生するエラー対処法【Next.js】"
date: "2020-02-21"
description: "Next.js × CSS module × material ui が原因で発生したコンソールエラーの解決方法を記載しています。Prop `className` did not match. Server: ~ Client: ~"
image: "/static/images/screen.png"
id: "pre-rendering"
---

<img src="/static/images/screen.png">

<br>

# 【Next.js】className が原因で発生するコンソールエラー

<br>

Next.js を使ってブログを構築していた時、こちらのコンソールエラーが発生しました。

```js
//コンソールエラー
Prop className did not match. Server: ~ Client: ~
```

<br>

サーバーとクライアントの classNames が一致しないために表示されるエラーメッセージです。また、CSS にチラつき(FOUC)が発生する原因になっています。

## 原因

エラーが発生する要因はいくつかあるようです。

<br>

**１**. サーバーサイドレンダリング(SSR)時に CSS modules のクラス自動生成による material ui クラス名の不一致

**２**. Babel によるトランスパイル発生

**３**. webpack でのクライアント側とサーバー側のコンパイルが異なるために発生

<br>

また、こちらでは **１**で発生した場合の対処方法を記載しています。**２**、**３** でのエラー原因は[こちら](https://stackoverflow.com/questions/50685175/react-material-ui-warning-prop-classname-did-not-match/58626730#58626730)で見つけました。

## 対処法

**\_document.js** を下記のようにカスタムする。

```js
//_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collect(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      ctx.renderPage(sheet);
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

<br>

私の場合これで解決しました。参考にしたサイトも載せておきます。

<br>

[Vercel GitHub](https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js)

[MUI の SSR 上での UI 使用例](https://material-ui.com/guides/server-rendering/)

[MUI が提供している Next.js 使用例](https://github.com/mui-org/material-ui/tree/master/examples/nextjs)
