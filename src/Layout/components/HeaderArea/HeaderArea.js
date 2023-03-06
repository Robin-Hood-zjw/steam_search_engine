import React from "react";
import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import "./HeaderArea.css";

const HeaderArea = (props) => {
  return (
    <Layout.Header className="header-background header-layout">
      <section>
        {React.createElement(
          props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => {
              props.toggle();
            },
          }
        )}
      </section>

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
