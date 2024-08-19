import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// css resetleri
import "./styles/cssreset.css";
// tailwind kurulumu
import "./styles/main.css";
// temel css
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
