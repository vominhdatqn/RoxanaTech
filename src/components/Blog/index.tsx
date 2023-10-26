import { Tabs, TabsProps } from "antd";
import AllBlog from "./AllBlog";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tất cả",
    children: <AllBlog />,
  },
];

export default function Blog() {
  return (
    <Tabs
      className="font-arsenal"
      defaultActiveKey="1"
      items={items}
      centered
    />
  );
}
