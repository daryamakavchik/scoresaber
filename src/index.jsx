import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "../src/components/services/store";
import reportWebVitals from "./reportWebVitals";
import App from "./components/app/app";
import "./pages/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App class="app" />
  </Provider>
);

reportWebVitals();
