import "src/styles/global.css";

import { ThemeProvider } from "next-themes";
import { gtagPageView } from "src/lib/gtagPageView";

export default function App({ Component, pageProps }) {
  gtagPageView();

  return (
    <ThemeProvider forcedTheme={Component.theme || undefined}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
