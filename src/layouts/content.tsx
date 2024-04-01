import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <Layout.Content className="bg-[#EDEDED] p-6">
      <Outlet />
    </Layout.Content>
  );
};

export default Content;
