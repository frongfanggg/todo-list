import { DatabaseFilled } from "@ant-design/icons";
import { Layout } from "antd";

const Header = () => {
  return (
    <Layout.Header className="bg-white shadow-inner">
      <span className="text-[#2B2325] text-xl font-semibold">
        SOL
        <DatabaseFilled className="text-[red]" />
        asy
      </span>
    </Layout.Header>
  );
};

export default Header;
