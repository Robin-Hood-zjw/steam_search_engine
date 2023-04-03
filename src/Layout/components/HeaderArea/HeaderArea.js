import React, { useState } from "react";
import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import "./HeaderArea.css";
import LoginModal from "./Modals/LogInModal";

const HeaderArea = (props) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [loadLogin, setLoadLogin] = useState(false);

  const showLogin = () => {
    setOpenLogin(true);
  };
  const handleLoginOk = () => {
    setLoadLogin(true);
    setTimeout(() => {
      setOpenLogin(false);
      setLoadLogin(false);
    }, 2000);
  };
  const handleLoginCancel = () => {
    console.log("Clicked cancel button");
    setOpenLogin(false);
  };

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

      <Button className="popup-button" type="primary" onClick={showLogin}>
        Login
      </Button>

      <section className="buttons">
        <Button className="popup-button" type="primary" onClick={showLogin}>
          Login
        </Button>
      </section>

      <LoginModal
        open={openLogin}
        onOk={handleLoginOk}
        loadStatus={loadLogin}
        onCancel={handleLoginCancel}
      />
    </Layout.Header>
  );
};

export default HeaderArea;
