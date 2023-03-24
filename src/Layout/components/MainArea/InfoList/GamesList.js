import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, Space } from "antd";
import { NumberOutlined } from "@ant-design/icons";

import styles from "./index.module.scss";

const IconText = ({ icon, text }) => (
  <Space className={styles.game_description}>
    {React.createElement(icon)}
    {text}
  </Space>
);

const GamesList = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get(
        //   "https://gamesothis.herokuapp.com/user/76561198345197403"
        // );
        const res = await axios.get(
          "http://ec2-54-197-97-107.compute-1.amazonaws.com:3080/user", { crossdomain: true }
          //"http://localhost:3080/user", { crossdomain: true }
        )

        console.log(res);
        const info = res.data.data;
        const gameData = info.map((ele, i) => {
          return {
            href: "https://ant.design",
            title: ele[0],
            score: ele[3],
            avatar: `https://joesch.moe/api/v1/random?key=${i}`,
            description: `Developer: ${ele[4]
              .split(",")
              .join(", ")}     |     Publish Date: ${ele[2]}     |     Genre: ${
              ele[5]
            }`,
            content:
              ele[1].length > 500 ? `${ele[1].slice(0, 501)} ...` : ele[1],
          };
        });
        setGameList(gameData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 3,
      }}
      dataSource={gameList}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              className={styles.game_description}
              icon={NumberOutlined}
              text={item.score}
              key="list-vertical-star-o"
            />,
          ]}
        >
          <List.Item.Meta
            // avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default GamesList;
