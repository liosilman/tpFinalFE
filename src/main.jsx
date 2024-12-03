// main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Importa desde "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import App from "../App";

// Usando createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
