import React, { StrictMode } from "react";
import ReactDOM, { Container } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root") as Container);
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
