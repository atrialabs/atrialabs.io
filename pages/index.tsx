import type { AppProps } from "next/app";

import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </>
  );
};

export default Home;
