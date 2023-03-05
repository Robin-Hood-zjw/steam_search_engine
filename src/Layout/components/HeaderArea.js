import { Layout, Button } from "antd";
import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const HeaderArea = (collapsed, setCollapsed) => {
  return (
    <Layout.Header className="header-background header-layout">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}

      <section className="buttons">
        <Button className="popup-button" type="primary">
          Login
        </Button>
        <Button className="popup-button" type="primary">
          Sign Up
        </Button>
      </section>
    </Layout.Header>
  );
};

export default HeaderArea;
