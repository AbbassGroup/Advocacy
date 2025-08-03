import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider
} from "react-router-dom";
import "./index.css";
import { router } from "./router/router";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
