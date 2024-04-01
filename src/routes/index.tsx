import { RouteObject } from "react-router-dom";
import Layouts from "../layouts";
import StyleComponent from "../pages/style";
import TodoListPage from "../pages/todo-list";

const APP_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/style",
        element: <StyleComponent />,
      },
      {
        path: "/todo-list",
        element: <TodoListPage />,
      },
    ],
  },
];

export default APP_ROUTES;
