import { Layout } from "antd";
import React from "react";
import { Col, Row } from "antd";

import styles from "./index.module.scss";
import GamesList from "./InfoList/GamesList";

const MainArea = () => {
  return (
    <Layout.Content className={styles.site_layout_background}>
      <Row className={styles.main_area}>
        <Col lg={24} md={24} sm={24}>
          <GamesList />
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default MainArea;
