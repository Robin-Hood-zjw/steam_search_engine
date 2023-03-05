import { Layout } from "antd";
import React from "react";
import { Col, Row } from "antd";

import GamesList from "./GamesList";

const MainArea = (collapsed, setCollapsed) => {
  return (
    <Layout.Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <Row>
        <Col lg={10} md={24} sm={24}>
          <GamesList />
        </Col>
        {/* <Col lg={10} md={24} sm={24}>
          <Calendar fullscreen={false} onPanelChange={onDateChange} />
        </Col> */}
      </Row>
    </Layout.Content>
  );
};

export default MainArea;
