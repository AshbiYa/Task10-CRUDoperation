import React from "react";
import ReactDOM from "react-dom/client";
import Crud from "./Crud";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Crud />
    </BrowserRouter>
  </React.StrictMode>
);
