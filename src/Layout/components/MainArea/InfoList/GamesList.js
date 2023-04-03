import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, Space, Image } from "antd";
import { NumberOutlined } from "@ant-design/icons";

import styles from "./index.module.scss";

const IconText = ({ icon, text, imgURL }) => (
  <Space className={styles.game_description}>
    {React.createElement(icon)}
    {text}
    <Image width={200} src={imgURL} />
  </Space>
);

const GamesList = () => {
  const [gameList, setGameList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://gamesothis.herokuapp.com/user/13951034851"
      );
      console.log(res);
      const info = res.data.data;

      const gameData = info.map((ele, i) => {
        return {
          href: "https://ant.design",
          title: ele[0],
          score: ele[3],
          avatar: `https://joesch.moe/api/v1/random?key=${i}`,
          description: `Developer: ${ele[4]
            .slice(
              0,
              ele[4].indexOf("(") !== -1 ? ele[4].indexOf("(") : ele[4].length
            )
            .split(",")
            .join(", ")}     |     Publish Date: ${
            ele[2]
          }     |     Genre: ${ele[5].split(",").join(", ")}${
            ele[4].indexOf("(") !== -1
              ? `     |     Operating System: ${ele[4].slice(
                  ele[4].indexOf("(") + 1,
                  ele[4].length - 1
                )}`
              : ""
          }`,
          content: ele[1].length > 500 ? `${ele[1].slice(0, 501)} ...` : ele[1],
        };
      });
      setGameList(gameData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
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
              imgURL={item}
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
