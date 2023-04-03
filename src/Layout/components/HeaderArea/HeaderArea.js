import React, { useState } from "react";
import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import "./HeaderArea.css";
import LoginModal from "./Modals/LogInModal";

const HeaderArea = (props) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [loadLogin, setLoadLogin] = useState(false);
  const [isLoggedIn, setIsLoggedin] = useState(false);

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

  const handleLogin = () => {
    setIsLoggedin(false);
  };

  const handleLogout = () => {
    setIsLoggedin(true);
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
      
      {/* <section className="buttons">
        <Button className="popup-button" type="primary" onClick={showLogin}>
          Login
        </Button>
      </section> */}
      
      {/* <section className="buttons">
        <Button className="popup-button" type="primary">
            Recommend
        </Button>
      </section>      */}

      <section className="buttons">
      {
        isLoggedIn 
          ? (
              <Button className="popup-button" onClick={handleLogin}>
                {/* <a href="https://game-sothis-backend.herokuapp.com/logout">Sign out</a> */}
                <a href="http://localhost:3080/logout">Sign out</a>
              </Button>
             
            )
          : ( 
              <Button className="popup-button" type="primary" onClick={handleLogout}>
                {/* <a href="https://game-sothis-backend.herokuapp.com/api/auth/steam">Sign in</a> */}
                <a href="http://localhost:3080/api/auth/steam">Sign in</a>
              </Button>
            )
      }

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
