import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { StyledEngineProvider } from "@mui/material/styles";
import Home from "./components/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Home />
    </StyledEngineProvider>
  </React.StrictMode>
);
