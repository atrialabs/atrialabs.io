import React from "react";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import "../styles/globals.css";

// NOTE this is the interface between Next and Markdoc
// `pageProps` contains the markdoc metadata for the current markdown page
// if you want a page-unique layout, you probably have to branch off some `pageProps` field

const MyApp = ({ Component, pageProps }: AppProps) => {
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

export default MyApp;
