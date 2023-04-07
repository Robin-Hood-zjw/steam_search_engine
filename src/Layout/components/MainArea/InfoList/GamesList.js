import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, Space, Tag } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import styles from "./index.module.scss";
import Tags from "./Tags";

const IconText = ({ icon, text, genres }) => (
    <Space className={styles.txt_area}>
      {icon}
      {text}
      {<Tags genres={genres}/> }     
    </Space>
);

const DEFAULT_IMG="https://steamcdn-a.akamaihd.net/steam/apps/220/library_600x900_2x.jpg"

const GamesList = () => {
  const [gameList, setGameList] = useState([]);

  const fetchData = async () => {
    try {
      // const res = await axios.get(
      //   "https://gamesothis.herokuapp.com/user/76561198345197403"
      // );
      const res = await axios.get(
        //"https://92fa-54-197-97-107.ngrok.io/user", 
        "http://localhost:3080/user", { crossdomain: true }
        //"https://game-sothis-backend.herokuapp.com/user"
      )

      console.log(res);
      const info = res.data.data;
      const gameData = info.map((ele, i) => {
        const developer = ele[6].split(",").join(", ");
        const genres = ele[7].split(","); 
        const contents = ele[3].length > 500 ? `${ele[3].slice(0, 751)} ...` : ele[3];

        return {
          href: "https://www.metacritic.com" + ele[2],
          title: ele[0],
          score: ele[5],
          genres: genres,
          image: `https://steamcdn-a.akamaihd.net/steam/apps/${ele[1]}/library_600x900_2x.jpg`,
          description: `Developer: ${developer}     |     Publish Date: ${ele[4]}`,
          content: contents
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
          className={styles.game_description}
          key={item.title}
          actions={[
            <IconText
              className={styles.game_description}
              icon={<FontAwesomeIcon icon={faRankingStar} />}
              text={item.score}
              genres={item.genres}
              imageURL={item.image}

              key="list-vertical-star-o"
            />,
          ]}
          extra={
            <img 
              width={150} 
              alt={"logo"} 
              src={item.image} 
              onError={(e)=>{e.target.src=DEFAULT_IMG}
            }/>
        }
        >
          <List.Item.Meta
            className={styles.txt_area}
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
