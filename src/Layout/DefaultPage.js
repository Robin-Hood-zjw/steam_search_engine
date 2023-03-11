import axios from "axios";
import { Layout } from "antd";
import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    axios
      .get("https://gamesothis.herokuapp.com/user/76561198030764668")
      .then((res) => JSON.parse(res))
      .catch((err) => console.log(err));
  });

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
