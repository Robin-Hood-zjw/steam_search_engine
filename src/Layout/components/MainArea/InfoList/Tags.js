import { Space, Tag } from "antd";

const Tags = ({ genres }) => (
  <Space size={[0, 8]}>
    {genres.map((genre) => (
      <Tag>{genre}</Tag>
    ))}
  </Space>
);
export default Tags;