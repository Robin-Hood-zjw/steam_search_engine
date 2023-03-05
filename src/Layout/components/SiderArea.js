import { Layout } from "antd";
import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const SiderArea = (collapsed) => {
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Layout.Menu
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
    </Layout.Sider>
  );
};

export default SiderArea;
