import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../routes";

const Sider = () => {
  const navigate = useNavigate();

  return (
    <Layout.Sider className="!bg-[#2F353A] text-white overflow-y-auto">
      <div className="p-4"></div>
      {APP_ROUTES[0].children?.map((e, i) => {
        return (
          <div key={i} onClick={() => (e.path ? navigate(e.path) : undefined)}>
            {e.path}
          </div>
        );
      })}
    </Layout.Sider>
  );
};

export default Sider;
