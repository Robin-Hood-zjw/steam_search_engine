import { Layout } from "antd";
import React from "react";

import "../index.css";

import MainArea from "./components/MainArea/MainArea";
import HeaderArea from "./components/HeaderArea/HeaderArea";
import SiderArea from "./components/SideArea/SideArea";

const DefaultLayout = () => {

  return (
    <Layout>
      <SiderArea />
      <Layout style={{ minHeight: "100vh" }} className="site-layout">
        <HeaderArea />
        <MainArea />
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
