import React, { useState } from "react";
import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam } from "@fortawesome/free-brands-svg-icons";

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
      {/* <FontAwesomeIcon icon={faSteam} className="icon" /> */}

      <section className="buttons">
        <Button className="popup-button" type="primary">
          {/* <a href="https://game-sothis-backend.herokuapp.com/api/auth/steam"> Sign in</a> */}
          <FontAwesomeIcon icon={faSteam} />
          <a href="http://localhost:3080/api/auth/steam"> Sign in</a>
        </Button>

        <Button className="popup-button">
          {/* <a href="https://game-sothis-backend.herokuapp.com/logout">Sign out</a> */}
          <a href="http://localhost:3080/logout">Sign out</a>
        </Button>

        {/* <Button className="popup-button" type="primary">
          <a href="https://game-sothis-backend.herokuapp.com/api/auth/steam">Sign in</a>
        </Button>

        <Button className="popup-button" type="danger">
          <a href="https://game-sothis-backend.herokuapp.com/signout">Sign out</a>
        </Button> */}
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
