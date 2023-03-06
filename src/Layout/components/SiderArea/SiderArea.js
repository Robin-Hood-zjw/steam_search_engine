import { Layout, Menu } from "antd";
import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import styles from "./index.module.scss";

const { Sider } = Layout;

const SiderArea = (props) => {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <img className={styles.logo} src={"/logo.png"} alt={"hhh"} />

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            label: "nav 1",
            icon: <UserOutlined />,
          },
          {
            key: "2",
            label: "nav 2",
            icon: <VideoCameraOutlined />,
          },
          {
            key: "3",
            label: "nav 3",
            icon: <UploadOutlined />,
          },
        ]}
      />
    </Sider>
  );
};

export default SiderArea;
