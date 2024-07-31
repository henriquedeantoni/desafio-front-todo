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

/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import TodoPage from '../pages/TodoPage'


const AppRoutes: React.FC = () => {
    return (
      <Router>
        <Routes>

            <Route path="/" exact component={HomePage} />
            <Route path="/todos" component={TodoPage} />

        </Routes>
      </Router>
    );
  };

export default AppRoutes */

