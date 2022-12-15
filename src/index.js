import AuthProvider from "./Component/Firebase/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
