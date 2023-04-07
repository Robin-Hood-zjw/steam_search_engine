import { Layout } from "antd";
import React from "react";

import "../index.css";

import MainArea from "./components/MainArea/MainArea";
import HeaderArea from "./components/HeaderArea/HeaderArea";

const DefaultLayout = () => {

  return (
    <Layout>

      <Layout style={{ minHeight: "100vh" }} className="site-layout">
        <HeaderArea />
        <MainArea />
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
