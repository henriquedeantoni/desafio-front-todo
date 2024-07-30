import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import './styles/global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
