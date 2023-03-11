import { Layout, Menu } from "antd";
import React from "react";
import {
  UserOutlined,
  HistoryOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import styles from "./index.module.scss";

const { Sider } = Layout;

const SiderArea = (props) => {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <img className={styles.logo} src={"/logo192.png"} alt={"hhh"} />

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            label: "General Info",
            icon: <UnorderedListOutlined />,
          },
          {
            key: "2",
            label: "Personal Info",
            icon: <UserOutlined />,
          },
          {
            key: "3",
            label: "History",
            icon: <HistoryOutlined />,
          },
        ]}
      />
    </Sider>
  );
};

export default SiderArea;
