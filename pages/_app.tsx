import React from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { globalCss } from "@stitches/react";
import styled from "../components/Styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Content from "../components/Content";
import Footer from "../components/Footer";

const globalStyles = globalCss({
  "*": {
    margin: "0",
    boxSizing: "border-box",
  },
  "html, body": {
    height: "100%",
  },
  html: {
    fontSize: "18px",
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
  a: {
    color: "black",
    textDecoration: "none",
  },
  body: {
    lineHeight: "1.5",
  },
});

const Background = styled("div", {
  backgroundImage: `linear-gradient(
  10deg,
  hsl(210deg 11% 93%) 0%,
  hsl(267deg 10% 94%) 9%,
  hsl(312deg 20% 96%) 18%,
  hsl(326deg 52% 97%) 27%,
  hsl(331deg 81% 98%) 36%,
  hsl(337deg 42% 97%) 45%,
  hsl(351deg 19% 96%) 55%,
  hsl(36deg 9% 95%) 64%,
  hsl(60deg 8% 95%) 73%,
  hsl(60deg 8% 95%) 82%,
  hsl(60deg 8% 95%) 91%,
  hsl(60deg 8% 95%) 100%
)`,

  variants: {
    white: {
      true: {
        backgroundColor: "#ffffff",
        backgroundImage: "none",
      },
    },
  },
});

const Layout = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  const router = useRouter();
  const isEssay = router.asPath.startsWith("/essays/");

  return (
    <Background white={isEssay}>
      <Layout>
        <Header essayView={isEssay} />
        <Heading isEssay={isEssay} markdoc={pageProps.markdoc.frontmatter} />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </Layout>
    </Background>
  );
};

export default MyApp;
