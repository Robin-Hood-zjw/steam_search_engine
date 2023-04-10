// import { Layout } from "antd";
// import React from "react";
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";

// import { Btn1, Btn2 } from "./Btns";

// const SiderArea = () => {
//   return (
//     <Layout.Sider >

//       <Layout.Menu
//         // theme="dark"
//         // mode="inline"
//         // defaultSelectedKeys={["1"]}
//         // items={[
//         //   {
//         //     key: "1",
//         //     label: "nav 1",
//         //     icon: <UserOutlined />,
//         //     //onclick: () => {window.location.href = "http://localhost:3080/api/auth/steam"},
//         //   },
//         //   {
//         //     key: "2",
//         //     label: "nav 2",
//         //     icon: <VideoCameraOutlined />,
//         //     //onclick: () => {window.location.href = "http://localhost:3080/logout"},
//         //   }
//         // ]}
//       />
//     </Layout.Sider>
//   );
// };

// export default SiderArea;

import { Layout, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import styles from "./index.module.scss";

const { Sider } = Layout;
// import { Btn1, Btn } from "./Btns";

const SiderArea = (props) => {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      {/* <FontAwesomeIcon icon={faSteam} className={styles.logo} /> */}
      <img className={styles.logo} src={"/logo.jpeg"} alt={"hhh"} />

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            label: "nav 1",
            icon: <UserOutlined />,
            onclick: () => {
              window.location.href = "http://localhost:3080/api/auth/steam";
            },
          },
          {
            key: "2",
            label: "nav 2",
            icon: <VideoCameraOutlined />,
            onclick: () => {
              window.location.href = "http://localhost:3080/logout";
            },
          },
        ]}
      />
    </Sider>
  );
};

export default SiderArea;
