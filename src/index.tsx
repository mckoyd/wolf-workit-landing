import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./pages/App";

import "./styles/index.css";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

const rootElement = document.getElementById("root") as HTMLElement;

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
