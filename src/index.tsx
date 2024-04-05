import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/*",
    element: <h1>Hello World of React/TS/ReactRouter on Github!</h1>,
  },
]);

const rootElement = document.getElementById("root") as HTMLElement;

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
