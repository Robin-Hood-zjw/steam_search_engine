import React, { useState } from "react";
import { Layout, Button, Modal } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import "./HeaderArea.css";
import LoginModal from "./Modals/LogInModal";
import SignupModal from "./Modals/SignUpModal";

const HeaderArea = (props) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [loadLogin, setLoadLogin] = useState(false);
  const [modalText1, setModalText1] = useState("Content of the modal");

  const [openSignup, setOpenSignup] = useState(false);
  const [loadSignup, setLoadSignup] = useState(false);
  const [modalText2, setModalText2] = useState("Content of the modal");

  const showLogin = () => {
    setOpenLogin(true);
  };
  const handleLoginOk = () => {
    setModalText1("The modal will be closed after two seconds");
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

  const showSignup = () => {
    setOpenSignup(true);
  };

  const handleSignupOk = () => {
    setModalText2("The modal will be closed after two seconds");
    setLoadSignup(true);
    setTimeout(() => {
      setOpenSignup(false);
      setLoadSignup(false);
    }, 2000);
  };
  const handleSignupCancel = () => {
    console.log("Clicked cancel button");
    setOpenSignup(false);
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

      <section className="buttons">
        <Button className="popup-button" type="primary" onClick={showLogin}>
          Login
        </Button>

        <Button className="popup-button" type="primary" onClick={showSignup}>
          Sign Up
        </Button>
      </section>

      <LoginModal
        open={openLogin}
        onOk={handleLoginOk}
        loadStatus={loadLogin}
        onCancel={handleLoginCancel}
        text={modalText1}
      />

      <SignupModal
        open={openSignup}
        onOk={handleSignupOk}
        loadStatus={loadSignup}
        onCancel={handleSignupCancel}
        text={modalText2}
      />
    </Layout.Header>
  );
};

export default HeaderArea;
