import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("micro-app")).render(
  <StrictMode>
    <HashRouter basename={window.__MICRO_APP_BASE_ROUTE__ || "/"}>
      <App />
    </HashRouter>
  </StrictMode>
);
