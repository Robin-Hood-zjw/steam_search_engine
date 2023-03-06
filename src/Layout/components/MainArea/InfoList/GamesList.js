import React from "react";
import { Avatar, List, Space } from "antd";
import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";

import styles from "./index.module.scss";

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://joesch.moe/api/v1/random?key=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

const IconText = ({ icon, text }) => (
  <Space className={styles.game_description}>
    {React.createElement(icon)}
    {text}
  </Space>
);

const GamesList = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      pageSize: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText
            className={styles.game_description}
            icon={StarOutlined}
            text="156"
            key="list-vertical-star-o"
          />,
          <IconText
            className={styles.game_description}
            icon={LikeOutlined}
            text="156"
            key="list-vertical-like-o"
          />,
          <IconText
            className={styles.game_description}
            icon={MessageOutlined}
            text="2"
            key="list-vertical-message"
          />,
        ]}
        extra={<img width={272} alt="logo" src={"/profile.png"} />}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default GamesList;
