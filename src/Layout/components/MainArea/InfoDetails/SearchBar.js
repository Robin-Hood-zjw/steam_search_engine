import { Input, Card, Space } from "antd";
import styles from "./index.module.scss";
import KeywordBar from "./KeywordBar";

const SearchBar = () => {
  return (
    <Space direction="vertical" size={16}>
      <Card
        className={styles.Card}
        size="small"
        title="Search Bar"
        style={{
          width: 500,
        }}
      >
        <Input placeholder="Please input your search." />
      </Card>

      <Card
        className={styles.Card}
        size="small"
        title="Keyword Record"
        style={{
          width: 500,
        }}
      >
        <KeywordBar />
      </Card>
    </Space>
  );
};
export default SearchBar;
