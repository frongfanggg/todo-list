import { Layout } from "antd";
import Header from "./header";
import Sider from "./sider";
import Content from "./content";

const Layouts = () => {
  return (
    <Layout className="w-[100vw] h-[100vh] overflow-hidden">
      <Header />
      <Layout className="overflow-y-auto">
        <Sider />
        <Layout>
          <Content />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Layouts;
