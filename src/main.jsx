import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header/Header.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>
);
