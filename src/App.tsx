import { HashRouter, useRoutes } from "react-router-dom";
import "./App.css";
import APP_ROUTES from "./routes";

const AppRoute = () => {
  const appRoute = useRoutes(APP_ROUTES);
  return appRoute;
};

function App() {
  return (
    <HashRouter>
      <AppRoute />
    </HashRouter>
  );
}

export default App;
