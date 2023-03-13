import { Layout } from "antd";
import React, { useState } from "react";

import "../index.css";

import MainArea from "./components/MainArea/MainArea";
import SiderArea from "./components/SiderArea/SiderArea";
import HeaderArea from "./components/HeaderArea/HeaderArea";

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
    console.log("I am here.");
  };

  return (
    <Layout>
      <SiderArea collapsed={collapsed} />

      <Layout style={{ minHeight: "100vh" }} className="site-layout">
        <HeaderArea toggle={toggle} collapsed={collapsed} />
        <MainArea />
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
