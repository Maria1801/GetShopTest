import Layout from "@/components/shared/Layout";
import { ActiveSectionProvider } from "@/providers/ActiveSectionContext";
import { ThemeUIProvider } from 'theme-ui';
import '../static/jank-empty.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider>
      <ActiveSectionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ActiveSectionProvider>
    </ThemeUIProvider>
  );
}
