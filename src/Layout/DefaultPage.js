import { Layout } from "antd";
import React, { useState } from "react";
import "../index.css";

import MainArea from "./components/MainArea/MainArea";
import SiderArea from "./components/SiderArea";
import HeaderArea from "./components/HeaderArea";

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <SiderArea collapsed={collapsed} />

      <Layout style={{ minHeight: "100vh" }} className="site-layout">
        <HeaderArea collapsed={collapsed} />
        <MainArea collapsed={collapsed} setCollapsed={setCollapsed} />
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
