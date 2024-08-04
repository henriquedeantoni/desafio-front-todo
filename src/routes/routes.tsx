import { createBrowserRouter } from "react-router-dom";
import TodoPage from '../pages/TodoPage/TodoPage'
import App from '../App';

const routes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "todos",
      element: <TodoPage />,
    },
  ];

export const router = createBrowserRouter(routes);
