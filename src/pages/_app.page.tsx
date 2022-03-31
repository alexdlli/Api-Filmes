import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import queryClient from "../utils/queryClient";
import { GlobalStyle } from "../styles";
import { PageProvider } from "../hooks";
import "@fontsource/league-spartan/400.css";
import "@fontsource/league-spartan/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageProvider>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </PageProvider>
  );
}

export default MyApp;
