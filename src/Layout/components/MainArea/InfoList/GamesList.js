import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, Space, Avatar, Image } from "antd";
import { NumberOutlined } from "@ant-design/icons";

import styles from "./index.module.scss";

const IconText = ({ icon, text, imageURL }) => (
  <Space className={styles.game_description}>
    {React.createElement(icon)}
    {text}
    <Image width={200} src={imageURL}/>
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
          //"https://92fa-54-197-97-107.ngrok.io/user", 
          //"http://localhost:3080/user", { crossdomain: true }
          "https://game-sothis-backend.herokuapp.com/user"
        )

        console.log(res);
        const info = res.data.data;
        const gameData = info.map((ele, i) => {
          return {
            href: "https://www.metacritic.com" + ele[2],
            title: ele[0],
            score: ele[5],
            image: `https://steamcdn-a.akamaihd.net/steam/apps/${ele[1]}/library_600x900_2x.jpg`,
            description: `Developer: ${ele[6]
              .split(",")
              .join(", ")}     |     Publish Date: ${ele[4]}     |     Genre: ${
              ele[7]
            }`,
            content:
              ele[3].length > 500 ? `${ele[3].slice(0, 501)} ...` : ele[3],
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
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            imageURL={item.image}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default GamesList;
